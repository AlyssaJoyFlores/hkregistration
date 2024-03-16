const User = require('../models/usersModel')
const Applicants = require('../models/hkApplicationModel')
const CustomError = require('../errors')
const {StatusCodes} = require('http-status-codes')
const { attachedCookiesToResponse, createTokenUser, sendVerificationEmail, sendResetPasswordEmail, sendLoginAttempEmail, createHash} = require('../utils')




const getAllHkapplicants = async(req, res)=>{
    const applicants = await Applicants.find({})
    res.status(StatusCodes.OK).json(applicants)
}


const getSingleHkapplicant= async(req, res) => {
    const applicants = await Applicants.findById(req.params.id)
    if(!applicants){
        res.status(404)
        throw new CustomError.NotFoundError("Hk application not found")
    }
    res.status(StatusCodes.OK).json(applicants)
}



const getUserApplication = async(req, res)=>{
    const application = await Applicants.find({user: req.user.userId})
    res.status(StatusCodes.OK).json({application, count: application.length})
}






const createHkApplication = async(req, res)=>{

    const {
        fname,
        lname,
        bday,
        phoneNum,
        age,
        fblink,
        address,
        lastSchoolAttend,
        motherFName,
        motherLName,
        motherOccupation,
        motherIncome,
        fatherFName,
        fatherLName,
        fatherOccupation,
        fatherIncome,
        reasonToApply
    } = req.body;
  

    const application = await Applicants.create({
        fname,
        lname,
        email: req.user.email,
        bday,
        phoneNum,
        age,
        fblink,
        address,
        lastSchoolAttend,
        motherFName,
        motherLName,
        motherOccupation,
        motherIncome,
        fatherFName,
        fatherLName,
        fatherOccupation,
        fatherIncome,
        reasonToApply,
        user: req.user.userId
    })
    res.status(StatusCodes.CREATED).json({msg: 'Hk Application Created Successfully', application})
}



const updateHKApplicant = async(req, res)=>{
    const application = await Applicants.findById(req.params.id)
    if(!application){
        throw new CustomError.NotFoundError("HK application not found")
    }


    const updatedHkApplication = await Applicants.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true}
    )
    res.status(StatusCodes.OK).json({msg: 'HK Applicant Updated Successfully', updatedHkApplication})
}



const deleteHKApplicant = async(req, res)=>{
    const application = await Applicants.findById(req.params.id)
    if(!application){
        throw new CustomError.NotFoundError("HK Applicant not found")
    }

    await Applicants.deleteOne({_id: req.params.id})
    
    res.status(StatusCodes.OK).json({msg: 'HK Applicant Deleted Successfully', application})
}





module.exports = { 
    getAllHkapplicants,
    getSingleHkapplicant,
    getUserApplication,
    createHkApplication,
    updateHKApplicant,
    deleteHKApplicant
}


