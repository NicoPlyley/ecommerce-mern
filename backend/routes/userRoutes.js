import express from 'express'
const router = express.Router()
import {
    authUser,
    deleteUser, getUser,
    getUserProfile,
    getUsers,
    reigtserUser, updateUser,
    updateUserProfile
} from '../controllers/userController.js'
import {admin, protect} from '../middleware/authMiddleware.js'

router.route('/')
    .post(reigtserUser)
    .get(protect, admin, getUsers)

router.post('/login', authUser)

router.route('/profile')
    .get(protect, getUserProfile)
    .put(protect, updateUserProfile)

router.route('/:id')
    .delete(protect, admin, deleteUser)
    .get(protect, admin, getUser)
    .put(protect, admin, updateUser)

export default router