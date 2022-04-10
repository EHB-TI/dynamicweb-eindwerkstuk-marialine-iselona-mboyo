const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    host: 'postgres',
    database: 'postgres',
    password: 'password',
    port: '5432',
})

const getUsers = (request, response) => {
    pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const createUser = (request, response) => {
    const {
        username,
        password
    } = request.body

    pool.query('INSERT INTO users (username, password) VALUES ($1, $2)', [username, password], (error, results) => {
        if (error) {
            throw error
        }
        response.status(201).send(`User added with ID: ${results.insertId}`)
    })
}

module.exports = {
    getUsers,
    createUser
}