import {useDispatch, useSelector} from 'react-redux'
import {LinkContainer} from 'react-router-bootstrap'
import {Button, Col, Row, Table,} from 'react-bootstrap'
import {useEffect} from 'react'
import {listProducts} from '../actions/productActions'
import {Loader, Message} from '../components'

const ProductListScreen = ({history, match}) => {
  const dispatch = useDispatch()
  const productList = useSelector((state) => state.productList)
  const userLogin = useSelector((state) => state.userLogin)

  const {loading, error, products} = productList
  const {userInfo} = userLogin

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listProducts())
    } else {
      history.push('/login')
    }
  }, [dispatch, history, userInfo])

  const createProductHandler = () => {
    // Create Product
  }

  const deleteHandler = (id) => {
    // Delete products
  }

  return (
    <>
      <Row className="align-item-center">
        <Col>
          <h1>Products</h1>
        </Col>
        <Col className="text-right">
          <Button onClick={createProductHandler} className="my-3">
            <i className="fas fa-plus" />
            {' '}
            Create Product
          </Button>
        </Col>
      </Row>
      {loading && <Loader />}
      {error && <Message variant="danger">{error}</Message>}
      {!loading && !error && (
        <Table striped bordered hover responsive className="table-sm">
          <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Brand</th>
            <th>Edit/Delete</th>
          </tr>
          </thead>
          <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td>{product._id}</td>
              <td>{product.name}</td>
              <td>
                $
                {product.price}
              </td>
              <td>{product.category}</td>
              <td>{product.brand}</td>
              <td>
                <LinkContainer to={`/admin/product/${product._id}/edit`}>
                  <Button variant="light" className="btn-sm">
                    <i className="fas fa-edit" />
                  </Button>
                </LinkContainer>
                <Button
                  variant="danger"
                  className="btn-sm"
                  onClick={() => deleteHandler(product._id)}
                >
                  <i className="fas fa-trash" />
                </Button>
              </td>
            </tr>
          ))}
          </tbody>
        </Table>
      )}
    </>
  )
}

export default ProductListScreen
