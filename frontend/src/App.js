import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Container} from 'react-bootstrap'
import {Header, Footer} from './components'
import {
  CartScreen,
  HomeScreen,
  LoginScreen, OrderListScreen, OrderScreen, PaymentScreen, PlaceOrderScreen, ProductEditScreen, ProductListScreen,
  ProductScreen,
  ProfileScreen,
  RegisterScreen,
  ShippingScreen, UserEditScreen, UserListScreen
} from './screens'

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/login" component={LoginScreen} />
          <Route path="/register" component={RegisterScreen} />
          <Route path="/profile" component={ProfileScreen} />
          <Route path="/shipping" component={ShippingScreen} />
          <Route path="/payment" component={PaymentScreen} />
          <Route path="/placeorder" component={PlaceOrderScreen} />
          <Route path="/order/:id" component={OrderScreen} />
          <Route path="/" component={HomeScreen} exact />
          <Route path="/search/:keyword" component={HomeScreen} />
          <Route path="/product/:id" component={ProductScreen} />
          <Route path="/cart/:id?" component={CartScreen} />
          <Route path="/admin/users" component={UserListScreen} />
          <Route path="/admin/user/:id/edit" component={UserEditScreen} />
          <Route path="/admin/products" component={ProductListScreen} />
          <Route path="/admin/product/:id/edit" component={ProductEditScreen} />
          <Route path="/admin/orders" component={OrderListScreen} />
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App