import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Container} from 'react-bootstrap'
import {Header, Footer} from './components'
import {
    CartScreen,
    HomeScreen,
    LoginScreen, PaymentScreen, PlaceOrderScreen,
    ProductScreen,
    ProfileScreen,
    RegisterScreen,
    ShippingScreen
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
                    <Route path="/" component={HomeScreen} exact />
                    <Route path="/product/:id" component={ProductScreen} />
                    <Route path="/cart/:id?" component={CartScreen} />
                </Container>
            </main>
            <Footer />
        </Router>
    )
}

export default App