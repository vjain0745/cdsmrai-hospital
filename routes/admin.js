var admin = require('../controllers/admin');
const express = require('express')
const router = express.Router()
const jwtAuth = require('../utils/jwt');
const joiValidation = require('../utils/joi_validation');


router.get("/testing", admin.testing);
router.post('/createAdmin', joiValidation.createNewUser, admin.createAdmin)
router.post('/loginAdmin', admin.loginAdmin)
router.get('/getUserData', jwtAuth.verifyToken, admin.getUserData)

// Wards

router.get('/getAllWards', jwtAuth.verifyToken, admin.getAllWards)
router.post('/createAndUpdateWard', jwtAuth.verifyToken, admin.createAndUpdateWard)
router.post('/getWardById', jwtAuth.verifyToken, admin.getWardById)
router.post('/deleteWardById', jwtAuth.verifyToken, admin.deleteWardById)

// Registration

router.post('/registerPatient', jwtAuth.verifyToken, admin.registerPatient)
router.get('/getAllPatients', jwtAuth.verifyToken, admin.getAllPatients)
router.post('/getPatientsById', jwtAuth.verifyToken, admin.getPatientById)

module.exports = router;

