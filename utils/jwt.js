const responseHandlers = require("../utils/responses");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const createToken = (details) => {
    console.log(details);
    if (details) return jwt.sign(details.toJSON(), process.env.SECRET_KEY);
};

const verifyToken = async (req, res, next) => {
    try {
        console.log(req.headers);
        let { authorization } = req.headers
        if (authorization) {
            const decoded = jwt.verify(
                authorization,
                process.env.SECRET_KEY,
            )

            if (!decoded) throw new Error(responseHandlers.responseMessages.verificationErrorMessage);
            if(decoded.role_type !== 'admin') throw new Error(responseHandlers.responseMessages.verificationErrorMessage);
            req.userData = decoded;
            return next();
        }

        throw new Error(responseHandlers.responseMessages.verificationTokenNotFoundMessage)

    } catch (error) {
        responseHandlers.errorHandler(res, error)
    }
}

const generateHash = async(password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
}

const compareHash = async(incomingPass, databasePass) => {
    return await bcrypt.compare(incomingPass, databasePass);
}


module.exports = { verifyToken, createToken, generateHash, compareHash}