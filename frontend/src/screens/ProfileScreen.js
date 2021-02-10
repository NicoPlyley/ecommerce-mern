import {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getUserDetails} from '../actions/userActions'
import {Button, Col, Form, Row} from 'react-bootstrap'
import {Message} from '../components'


const ProfileScreen = ({location, history}) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState(null)

    const dispatch = useDispatch()
    const userDetails = useSelector(state => state.userDetails)
    const userLogin = useSelector(state => state.userLogin)

    const {error, user} = userDetails
    const {userInfo} = userLogin

    useEffect(() => {
        if (!userInfo) {
            history.push('/login')
        } else {
            console.log(user)
            if (!user.name) {
                dispatch(getUserDetails('profile'))
            } else {
                setName(user.name)
                setEmail(user.email)
            }
            console.log(user)
        }
    }, [history, userInfo, dispatch, user])

    const submitHandler = (e) => {
        e.preventDefault()
        setMessage(null)
        if (password !== confirmPassword) {
            setMessage('Passwords do not match')
        } else {

        }
    }

    return (
        <Row>
            <Col md={3}>
                <h2>User Profile</h2>
                {message && (<Message variant="danger">{message}</Message> )}
                {error && (<Message variant="danger">{error}</Message> )}
                <Form onSubmit={submitHandler}>
                    <Form.Group controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="name"
                            placeholder="Enter Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId="email">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId="password">
                        <Form.Label>New Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="New Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId="confirmPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </Form.Group>

                    <Button type="submit" variant="primary">Update</Button>
                </Form>
            </Col>
            <Col md={9}>
                <h2>My Orders</h2>
            </Col>
        </Row>
    )
}

export default ProfileScreen