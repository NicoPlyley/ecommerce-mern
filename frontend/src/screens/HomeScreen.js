import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Col, Row} from 'react-bootstrap'
import axios from 'axios'
import {Product} from '../components'
import {listProducts} from '../actions/productActions.js'

const HomeScreen = () => {
    const dispatch = useDispatch()

    const productList = useSelector(state => state.productList)
    const {loading, error, products} = productList

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])

    return (
        <>
            <h1>Latest Products</h1>
            {loading ? (<h2>Loading...</h2>) : error ? (<h3>{error}</h3>) :
                (
                    <Row>
                        {products.map(product => (
                            <Col key={product._id} sm={12} md={6} lg={4}>
                                <Product product={product} />
                            </Col>
                        ))}
                    </Row>
                )
            }
        </>
    )
}

export default HomeScreen
