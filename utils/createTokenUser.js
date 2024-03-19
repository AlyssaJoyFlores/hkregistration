
const createTokenUser = (user) => {
    return {
        // name:user.full_name, 
        userId:user._id, 
        fname: user.fname,
        lname: user.lname,
        email: user.email,
        role: user.role
        // bday: user.bday,
        // phoneNum: user.phoneNum,
        // age: user.age,
        // address: user.address,
        // lastSchoolAttend: user.lastSchoolAttend,
        // motherFName: user.motherFName,
        // motherLName: user.motherLName,
        // motherOccupation: user.motherOccupation,
        // motherIncome: user.motherIncome,
        // fatherFName: user.fatherFName,
        // fatherLName: user.fatherLName,
        // fatherOccupation: user.fatherOccupation,
        // fatherIncome: user.fatherIncome,
    }
}



module.exports = createTokenUser






// const createTokenUser = (user) => {
//     return {
//         name:user.full_name, 
//         userId:user._id, 
//         role:user.role}
// }


// module.exports = createTokenUser
