import express from 'express'
const router = express.Router()
import {authUser, getUserProfile, reigtserUser, updateUserProfile} from '../controllers/userController.js'
import {protect} from '../middleware/authMiddleware.js'

router.route('/').post(reigtserUser)

router.post('/login', authUser)

router.route('/profile')
    .get(protect, getUserProfile)
    .put(protect, updateUserProfile)

export default router