const {
    response
} = require('express')
const {
    request
} = require('express')

const Pool = require('pg').Pool
const pool = new Pool({
    user: 'admin',
    host: 'localhost',
    database: 'quotes_db',
    password: 'mypassword',
    port: '5432'
})

const getUsers = (request, response) => {
    pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}


const getUserByUsernameAndPassword = (request, response) => {
    const {
        username,
        password
    } = request.body

    pool.query('SELECT * FROM users WHERE username = $1 AND password = $2', [
        username, password
    ], (error, result) => {
        if (error) {
            throw error
        }

        if (result.rows.length === 0) {
            console.log(JSON.stringify(result));
            response.status(401).send()
        }
        response.status(200).send(result.rows[0])
    })
}

const createUser = (request, response) => {
    const {
        username,
        password
    } = request.body

    pool.query('INSERT INTO users (username, password) VALUES ($1, $2)', [
        username, password
    ], (error, results) => {
        if (error) {
            throw error
        }

        pool.query('SELECT * FROM users WHERE username = $1 ORDER BY id ASC', [username], (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).json(results.rows[0])
        })

    })
}


const getQuotes = (request, response) => {
    const userId = request.params.userId;

    pool.query('SELECT * FROM quotes WHERE user_id = $1 ORDER BY id ASC', [userId], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })


}

const postQuotes = (request, response) => {
    const {
        user_id,
        quote
    } = request.body

    pool.query('SELECT * FROM quotes WHERE user_id = $1 AND quote = $2', [
        user_id, quote
    ], (error, result) => {
        if (error) {
            throw error
        }

        if (result.rows.length > 0) {
            response.status(409).send()
        } else {
            pool.query('INSERT INTO quotes (user_id, quote) VALUES ($1, $2)', [
                user_id, quote
            ], (error, results) => {
                if (error) {
                    throw error
                }
                response.status(201).send();
            })
        }
    })
}

module.exports = {
    getUsers,
    createUser,
    getUserByUsernameAndPassword,
    getQuotes,
    postQuotes
}