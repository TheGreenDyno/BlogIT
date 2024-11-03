const express = require('express')
const app = express()
const ejs = require('ejs')
const DBconn= require('./config/dbcon')
// paths
const homepageRoutes = require('./routes/homepageRoutes')
const signupRoutes = require('./routes/signupRoutes')
const loginRoutes = require('./routes/loginRoutes')
const PORT = '3000'
//parsers.......
app.use(express.urlencoded({extended: false}))
// view engine..........
app.set('view engine', 'ejs')

DBconn()//db connection..........

// Routes...........
app.use('/', homepageRoutes)
app.use('/signup', signupRoutes)
app.use('/login',loginRoutes)


app.listen(PORT, () => {
    console.log(`started on port: ${PORT}`)
})
