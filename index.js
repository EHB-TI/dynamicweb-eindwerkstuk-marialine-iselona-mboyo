const express = require('express')
const bodyParser = require('body-parser')
var cors = require('cors');
const app = express()
const port = 3000
const db = require('./queries')

// app.use(function (req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });


app.use(cors())

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.get('/', (request, response) => {
    response.json({
        info: 'Node.js, Express, and Postgres API'
    })
})

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})

app.get('/users', db.getUsers)

app.post('/users', db.createUser)

app.post('/login', db.getUserByUsernameAndPassword)

app.get('/users/:userId/quotes', db.getQuotes)

app.post('/quotes', db.postQuotes)