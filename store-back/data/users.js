import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Jasmyne Jean-Remy',
        email: 'jasmyne@email.com',
        password: bcrypt.hashSync('password',10),
        isAdmin: true
    },
    {
        name: 'John Doe',
        email: 'john@email.com',
        password: bcrypt.hashSync('password',10),
    },
    {
        name: 'Jane Doe',
        email: 'jane@email.com',
        password: bcrypt.hashSync('password',10),
    }
]

export default users