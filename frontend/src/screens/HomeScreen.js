import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Col, Row} from 'react-bootstrap'
import {Product, Message, Loader, Paginate, ProductCarousel, Meta} from '../components'
import {listProducts} from '../actions/productActions'

const HomeScreen = ({match}) => {
    const keyword = match.params.keyword
    const pageNumber = match.params.pageNumber || 1

    const dispatch = useDispatch()

    const productList = useSelector(state => state.productList)
    const {loading, error, products, page, pages} = productList

    useEffect(() => {
        dispatch(listProducts(keyword, pageNumber))
    }, [dispatch, keyword, pageNumber])

    return (
        <>
            <Meta />
            {!keyword && <ProductCarousel />}
            <h1>Latest Products</h1>
            {loading ? (<Loader />) : error ? (<Message variant="danger">{error}</Message>) :
                (
                    <>
                        <Row>
                            {products.map(product => (
                              <Col key={product._id} sm={12} md={6} lg={4}>
                                  <Product product={product} />
                              </Col>
                            ))}
                        </Row>
                        <Paginate page={page} pages={pages} keyword={keyword ? keyword : ''} />
                    </>
                )
            }
        </>
    )
}

export default HomeScreen
