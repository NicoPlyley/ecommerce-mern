import express from 'express'
const router = express.Router()
import {addOrderItems, getCurrentUsersOrders, getOrderById, updateOrderToPaid} from '../controllers/orderController.js'
import {protect} from '../middleware/authMiddleware.js'

router.route('/').post(protect, addOrderItems)
router.route('/myorders').get(protect, getCurrentUsersOrders)
router.route('/:id').get(protect, getOrderById)
router.route('/:id/pay').put(protect, updateOrderToPaid)

export default router