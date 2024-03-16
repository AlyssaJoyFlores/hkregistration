const mongoose = require('mongoose');



const applicationSchema = new mongoose.Schema({
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    },
    fname: {
        type: String
    },
    lname: {
        type: String,
    },
    email: {
        type: String,
    },
    bday: {
        type: Date,
    },
    phoneNum: {
        type: Number,
    },
    age: {
        type: Number,
    },
    fblink: {
        type: String,
    },
    address: {
        type: String,
    },
    lastSchoolAttend: {
        type: String,
    },
    motherFName: {
        type: String,
    },
    motherLName: {
        type: String,
    },
    motherOccupation: {
        type: String,
    },
    motherIncome: {
        type: Number,
    },
    fatherFName: {
        type: String,
    },
    fatherLName: {
        type: String,
    },
    fatherOccupation: {
        type: String,
    },
    fatherIncome: {
        type: Number,
    },
    reasonToApply: {
        type: String,
    },
    hkstatus: {
        type: String,
        enum: ['accepted', 'declined', 'pending'],
        default: 'pending'
    }
},{
    timestamps: true,
})



module.exports = mongoose.model('Applicants' , applicationSchema);
