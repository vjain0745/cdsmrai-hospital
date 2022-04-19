const UserModel = require('../models/userModel')
const WardModel = require('../models/wardModel')
const jwtAuth = require('../utils/jwt');
const mongo = require('../services/mongoHandlers')
const responseHandlers = require("../utils/responses");

exports.testing = (req, res) => {
    try {
        res.json({ message: 'okkk' })
    } catch (error) {
        res.json({
            statusCode: 400,
            message: error.message
        })
    }
}

exports.createAdmin = async (req, res) => {
    try {
        let { name, email, password } = req.body
        let uploadData = { name, email, password, role_type: "admin" }
        uploadData['access_token'] = jwtAuth.createToken(uploadData);
        const user = new UserModel(uploadData);
        user.password = await jwtAuth.generateHash(user.password);

        const savedDetails = await mongo.create(UserModel, user);

        if (savedDetails) {
            return responseHandlers.successHandler(res, responseHandlers.responseMessages.adminSave, "")
        }

        throw new Error(responseHandlers.responseMessages.dataNotSaved)

    } catch (error) {
        if (error.name === 'MongoServerError') return responseHandlers.errorHandler(res, { message: responseHandlers.responseMessages.UserAlreadyExist });
        return responseHandlers.errorHandler(res, error);
    }
}

exports.loginAdmin = async (req, res) => {
    try {
        let { email, password } = req.body

        let currentAdmin = await mongo.findOne(UserModel, { email })
        if (!currentAdmin) throw new Error(responseHandlers.responseMessages.UserNotExist);
        let token = jwtAuth.createToken(currentAdmin);
        currentAdmin.access_token = token;
        const validPassword = await jwtAuth.compareHash(password, currentAdmin.password);
        if (validPassword) {
            await mongo.findOneAndUpdate(UserModel, { _id: currentAdmin._id }, { access_token: currentAdmin['access_token'] })
            responseHandlers.successHandler(res, responseHandlers.responseMessages.loggedIn, currentAdmin.access_token)
        }
        else {
            throw new Error('Email/Password is Wrong')
        }
    } catch (error) {
        responseHandlers.errorHandler(res, error)
    }
}

exports.getUserData = async (req, res) => {
    try {
        if (req.userData) {
            return responseHandlers.successHandler(res, responseHandlers.responseMessages.success, req.userData);
        }
    } catch (error) {
        return responseHandlers.errorHandler(res, error);
    }
}

exports.createAndUpdateWard = async (req, res) => {
    try {
        let { warnName, roomStart, roomEnd, price, wardId } = req.body;

        let uploadData = { warnName, roomStart, roomEnd, price };
        const savedDetails = await mongo.findOneAndUpsert(WardModel, { id: wardId }, uploadData);
        if (savedDetails) {
            return responseHandlers.successHandler(res, responseHandlers.responseMessages.wardSave, "")
        }

        throw new Error(responseHandlers.responseMessages.dataNotSaved)

    } catch (error) {
        return responseHandlers.errorHandler(res, error);
    }
}

exports.getWardById = async (req, res) => {
    try {
        let { wardId } = req.body
        let ward = await mongo.findOne(WardModel, { id: wardId })
        if (ward) {
            return responseHandlers.successHandler(res, responseHandlers.responseMessages.wardById, ward)
        } else {
            throw new Error(responseHandlers.responseMessages.Nowards)
        }
    } catch (error) {
        return responseHandlers.errorHandler(res, error);
    }
}

exports.getAllWards = async (req, res) => {
    try {
        let wards = await mongo.find(WardModel)
        if (wards) {
            return responseHandlers.successHandler(res, responseHandlers.responseMessages.wardById, wards)
        } else {
            throw new Error(responseHandlers.responseMessages.Nowards)
        }
    } catch (error) {
        return responseHandlers.errorHandler(res, error);
    }
}

