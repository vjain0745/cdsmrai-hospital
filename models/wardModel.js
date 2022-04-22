const mongoose = require('mongoose');

const wardSchema = new mongoose.Schema({
    wardName: { type: String, required: 'Ward Name Is Required' },
    roomStart: { type: String, required: 'Room Number Is Required' },
    roomEnd: { type: String, required: 'Room Number Is Required' },
    price: { type: String, required: 'Price is Required' },
    status: { type: String, enum: ["0", "1"], default: "1" },
}, {
    timestamps: true
});

module.exports = mongoose.model('wards', wardSchema);