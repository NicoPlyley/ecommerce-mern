import express from 'express'
const router = express.Router()
import {authUser, getUserProfile, reigtserUser, updateUserProfile} from '../controllers/userController.js'
import {protect} from '../middleware/authMiddleware.js'

router.route('/').post(reigtserUser)

router.post('/login', authUser)

router.route('/profile')
    .put(protect, updateUserProfile)
    .get(protect, getUserProfile)

export default router