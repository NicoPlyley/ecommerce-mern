import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@luxway.org',
        password: bcrypt.hashSync('password', 10),
        isAdmin: true
    },
    {
        name: 'Nico Plyley',
        email: 'nico@example.com',
        password: bcrypt.hashSync('password', 10)
    }
]

export default users