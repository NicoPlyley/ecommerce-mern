import {useDispatch, useSelector} from 'react-redux'
import {useEffect} from 'react'
import {LinkContainer} from 'react-router-bootstrap'
import {listUsers} from '../actions/userActions'
import {Loader, Message} from '../components'
import {Button, Table} from 'react-bootstrap'

const UserListScreen = ({history}) => {
    const dispatch = useDispatch()
    const userList = useSelector(state => state.userList)
    const userLogin = useSelector(state => state.userLogin)

    const {loading ,error, users} = userList
    const {userInfo} = userLogin

    useEffect(() => {
        if (userInfo && userInfo.isAdmin) {
            dispatch(listUsers())
        } else {
            history.push('/login')
        }
    }, [dispatch, history, userInfo])

    const deleteHandler = () => {
        console.log('delete')
    }

    return (
        <>
            <h1>Users</h1>
            {loading ? <Loader /> : error ? <Message variant="danger">{error}</Message> : (
                <Table striped bordered hover responsive className="table-sm">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Admin</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr key={user._id}>
                                <td>{user._id}</td>
                                <td>{user.name}</td>
                                <td><a href={`mailto:${user.email}`}>{user.email}</a></td>
                                <td>{user.isAdmin ? <i className="fas fa-check" style={{color: 'green'}} /> : <i className="fas fa-times" style={{color: 'red'}} />}</td>
                                <td>
                                    <LinkContainer to={`/user/${user._id}/edit`}>
                                        <Button variant="light" className="btn-sm">
                                            <i className="fas fa-edit" />
                                        </Button>
                                    </LinkContainer>
                                    <Button variant="danger" className="btn-sm" onClick={() => deleteHandler(user._id)}><i className="fas fa-trash" /></Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            ) }
        </>
    )
}

export default UserListScreen