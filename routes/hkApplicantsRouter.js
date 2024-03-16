const express = require('express');
const router = express.Router();


const {authenticateUser} = require('../middleware/authentication')

const {
    getAllHkapplicants,
    getSingleHkapplicant,
    getUserApplication,
    createHkApplication,
    updateHKApplicant,
    deleteHKApplicant
} = require('../controllers/hkApplicantsController')


// routes for forum
router.route('/getAllHkapplicants').get(authenticateUser, getAllHkapplicants)
router.route('/getUserApplication').get(authenticateUser, getUserApplication)

router.route('/createHkApplication').post(authenticateUser, createHkApplication)

router.route('/getSingleHkapplicant/:id').get(authenticateUser, getSingleHkapplicant)

router.route('/updateHKApplicant/:id').patch(authenticateUser, updateHKApplicant)
router.route('/deleteHKApplicant/:id').delete(authenticateUser, deleteHKApplicant)



module.exports = router;

