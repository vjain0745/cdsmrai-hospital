const UserModel = require('../models/userModel')
const WardModel = require('../models/wardModel');
const RegistrationModel = require('../models/registrationModel');
const jwtAuth = require('../utils/jwt');
const mongo = require('../services/mongoHandlers')
const responseHandlers = require("../utils/responses");
const ObjectID = require('mongodb').ObjectID;

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
        const validPassword = await jwtAuth.compareHash(password, currentAdmin.password);
        if (validPassword) {
            responseHandlers.successHandler(res, responseHandlers.responseMessages.loggedIn, token)
        }
        else {
            throw new Error('Email/Password is Wrong')
        }
    } catch (error) {
        responseHandlers.errorHandler(res, error)
    }
};

exports.getUserData = async (req, res) => {
    try {
        if (req.userData) {
            return responseHandlers.successHandler(res, responseHandlers.responseMessages.success, req.userData);
        }
    } catch (error) {
        return responseHandlers.errorHandler(res, error);
    }
};

exports.createAndUpdateWard = async (req, res) => {
    try {
        let { wardName, roomStart, roomEnd, price, wardId } = req.body;

        let uploadData = { wardName, roomStart, roomEnd, price };
        const savedDetails = await mongo.findOneAndUpsert(WardModel, { _id: new ObjectID(wardId) }, uploadData);
        if (savedDetails) {
            return responseHandlers.successHandler(res, responseHandlers.responseMessages.wardSave, savedDetails)
        }

        throw new Error(responseHandlers.responseMessages.dataNotSaved)

    } catch (error) {
        return responseHandlers.errorHandler(res, error);
    }
};

exports.getWardById = async (req, res) => {
    try {
        let { wardId } = req.body
        let ward = await mongo.findOne(WardModel, { _id: wardId })
        if (ward) {
            return responseHandlers.successHandler(res, responseHandlers.responseMessages.wardById, ward)
        } else {
            throw new Error(responseHandlers.responseMessages.Nowards)
        }
    } catch (error) {
        return responseHandlers.errorHandler(res, error);
    }
};

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
};

exports.deleteWardById = async (req, res) => {
    try {
        let { wardId } = req.body;
        let wards = await mongo.findOneAndDelete(WardModel, { _id: wardId })
        if (wards) {
            return responseHandlers.successHandler(res, responseHandlers.responseMessages.wardDeleted, '')
        } else {
            throw new Error(responseHandlers.responseMessages.Nowards)
        }
    } catch (error) {
        return responseHandlers.errorHandler(res, error);
    }
};

exports.registerPatient = async (req, res) => {
    try {
        let { patientName, age, gender, mobileNumber, address, email, referredBy, aadharCardNumber, patientAdmitted, ward, doctor, department, panel, billing, patientId, totalAmount, totalDiscountAmount, totalDiscountPercent, paymentMode } = req.body;

        let uploadData = { patientName, age, gender, mobileNumber, address, email, referredBy, aadharCardNumber, patientAdmitted, ward, doctor, department, panel, billing };

        const savedDetails = await mongo.findOneAndUpsert(RegistrationModel, { _id: new ObjectID(patientId) }, uploadData);
        if (savedDetails) {
            return responseHandlers.successHandler(res, responseHandlers.responseMessages.PatientSave, savedDetails)
        }

        throw new Error(responseHandlers.responseMessages.dataNotSaved)

    } catch (error) {
        return responseHandlers.errorHandler(res, error);
    }
};

exports.getPatientById = async (req, res) => {
    try {
        let { patientId } = req.body
        let patients = await mongo.findOne(RegistrationModel, { _id: patientId })
        if (patients) {
            return responseHandlers.successHandler(res, responseHandlers.responseMessages.patientById, patients)
        } else {
            throw new Error(responseHandlers.responseMessages.NoPatients)
        }
    } catch (error) {
        return responseHandlers.errorHandler(res, error);
    }
};

exports.getAllPatients = async (req, res) => {
    try {
        let registrations = await mongo.find(RegistrationModel)
        if (registrations) {
            return responseHandlers.successHandler(res, responseHandlers.responseMessages.allRegistrations, registrations)
        } else {
            throw new Error(responseHandlers.responseMessages.NoPatients)
        }
    } catch (error) {
        return responseHandlers.errorHandler(res, error);
    }
};