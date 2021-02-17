import {useDispatch, useSelector} from 'react-redux'
import {useEffect} from 'react'
import {LinkContainer} from 'react-router-bootstrap'
import {listOrders} from '../actions/orderActions'
import {Button, Table} from 'react-bootstrap'
import {Loader, Message} from '../components'

const OrderListScreen = ({history}) => {
  const dispatch = useDispatch()
  const orderList = useSelector(state => state.orderList)
  const userLogin = useSelector(state => state.userLogin)

  const {loading ,error, orders} = orderList
  const {userInfo} = userLogin

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listOrders())
    } else {
      history.push('/login')
    }
  }, [dispatch, history, userInfo])

  return (
    <>
      <h1>Orders</h1>
      {loading ? <Loader /> : error ? <Message variant="danger">{error}</Message> : (
        <Table striped bordered hover responsive className="table-sm">
          <thead>
          <tr>
            <th>ID</th>
            <th>User</th>
            <th>Date</th>
            <th>Total</th>
            <th>Paid</th>
            <th>Delivered</th>
            <th>Order Details</th>
          </tr>
          </thead>
          <tbody>
          {orders.map(order => (
            <tr key={order._id}>
              <td>{order._id}</td>
              <td>{order.user && order.user.name}</td>
              <td>{order.createdAt.substring(0, 10)}</td>
              <td>{order.totalPrice}</td>
              <td>{order.isPaid ? order.paidAt.substring(0, 10) : <i className="fas fa-times" />}</td>
              <td>{order.isDelivered ? order.deliveredAt.substring(0, 10) : <i className="fas fa-times" />}</td>
              <td>
                <LinkContainer to={`/order/${order._id}`}>
                  <Button variant="light" className="btn-sm">Details</Button>
                </LinkContainer>
              </td>
            </tr>
          ))}
          </tbody>
        </Table>
      ) }
    </>
  )
}

export default OrderListScreen