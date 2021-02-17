import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {
    produtListReducer,
    produtDetailsReducer,
    productDeleteReducer,
    productCreateReducer, productUpdateReducer, productCreateReviewReducer, productTopRatedReducer
} from './reducers/productReducers'
import {cartReducer} from './reducers/CartReducers'
import {
    userDeleteReducer,
    userDetailsReducer,
    userListReducer,
    userLoginReducer,
    userProfileReducer,
    userRegisterReducer, userUpdateReducer
} from './reducers/userReducers'
import {
    orderCreateReducer, orderDeliverReducer,
    orderDetailsReducer,
    orderListReducer,
    orderListUsersReducer,
    orderPayReducer
} from './reducers/orderReducers'

const reducer = combineReducers({
    productList: produtListReducer,
    productDetails: produtDetailsReducer,
    productDelete: productDeleteReducer,
    productCreate: productCreateReducer,
    productUpdate: productUpdateReducer,
    productCreateReview: productCreateReviewReducer,
    productTopRated: productTopRatedReducer,
    cart: cartReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userProfile: userProfileReducer,
    userList: userListReducer,
    userDelete: userDeleteReducer,
    userUpdate: userUpdateReducer,
    orderCreate: orderCreateReducer,
    orderDetails: orderDetailsReducer,
    orderPay: orderPayReducer,
    orderListUsers: orderListUsersReducer,
    orderList: orderListReducer,
    orderDeliver: orderDeliverReducer
})

const cartItemsFromStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []
const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
const shippingAddressFromStorage = localStorage.getItem('shippingAddress') ? JSON.parse(localStorage.getItem('shippingAddress')) : {}


const initialState = {
    cart: {cartItems: cartItemsFromStorage, shippingAddress: shippingAddressFromStorage},
    userLogin: {userInfo: userInfoFromStorage}
}

const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store