const express = require('express')
const mysql = require('mysql')
const myconn = require('express-myconnection')

const routes = require('./routes')




var cors = require('cors');
const app = express();

app.use(cors());

app.set('port', process.env.PORT || 9000)
const dbOptions = {
    host: '54.205.52.220',
    port: 3306,
    user: 'root',
    password: 'angel',
    database: 'vitra'
}

// middlewares -------------------------------------
app.use(myconn(mysql, dbOptions, 'single'))
app.use(express.json())


// routes -------------------------------------------
app.get('/', (req, res)=>{
    res.send('Welcome to my API')
})
app.use('/api', routes)

// server running -----------------------------------
app.listen(app.get('port'), ()=>{
    console.log('server running on port', app.get('port'))
})