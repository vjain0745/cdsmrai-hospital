const mongoose = require('mongoose');

const registrationSchema = new mongoose.Schema({
    patientName: { type: String, required: 'Patient Name Is Required' },
    age: { type: Number, required: 'Age Is Required' },
    gender: { type: String, enum: ['male', 'female', 'others'], required: 'Gender Is Required' },
    mobileNumber: { type: Number, required: 'Number Is Required' },
    address: { type: String },
    email: { type: String },
    referredBy: { type: String },
    aadharCardNumber: { type: String },
    status: { type: Number, enum: [0, 1], default: 1 },
    patientAdmitted: { type: Boolean, default: false },
    ward: {
        wardDetails: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'wards'
        },
        roomNumber: { type: Number }
    },
    doctor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'wards'
    },
    department: { type: String, enum: ['opd', 'emergency', 'others'], required: 'Department Is Required' },
    panel: { type: String, enum: ['general', 'TPA', 'others'], required: 'Panel Is Required' },
    billing: [
        {
            date: { type: String, default: Date.now() },
            type: { type: String },
            qty: { type: String },
            amount: { type: Number },
            discountPercent: { type: Number },
            discountAmountt: { type: Number },
            taxPercent: { type: Number },
            taxAmount: { type: Number },
            netAmount: { type: Number },
            remarks: { type: String },
        }
    ],
    totalAmount: { type: Number },
    totalDiscountAmount: { type: Number },
    totalDiscountPercent: { type: Number },
    paymentMode: { type: String }
    
}, {
    timestamps: true
});

module.exports = mongoose.model('registration', registrationSchema);