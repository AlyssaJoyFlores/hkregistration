const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');


const usersSchema = new mongoose.Schema({
    fname: {
        type: String
    },
    lname: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
        required: [true, "Provide password"]
    },
    role: {
        type: [String],
        enum: ['admin', 'student'],
        default: ['student']
    },
},{
    timestamps: true,
})




usersSchema.pre('save', async function(){
    if(!this.isModified('password')) return;
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})

usersSchema.methods.comparePassword = async function(candidatePassword){
    const isMatch = await bcrypt.compare(candidatePassword, this.password)
    return isMatch;
}


module.exports = mongoose.model('User' , usersSchema);
