require('dotenv').config()
require('ejs')
const express = require('express')
const app = express()
const cookieParser = require('cookie-parser')


// paths
const DBconn = require('./config/dbcon')
const indexPageRoutes = require('./routes/indexRoutes')
const homepageRoutes = require('./routes/homepageRoutes')
const signupRoutes = require('./routes/signupRoutes')
const loginRoutes = require('./routes/loginRoutes')
const blogRoutes = require('./routes/blogRoutes')
const { onlyLoggedInUsers } = require('./middlewares/restrictUserMiddleware')


const PORT = process.env.PORT || 3000
//parsers.......
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.use(express.static('./public'))

// view engine..........
app.set('view engine', 'ejs')

DBconn()//db connection..........

// Routes...........
app.use('/', indexPageRoutes)
app.use('/home', onlyLoggedInUsers, homepageRoutes)
app.use('/signup', signupRoutes)
app.use('/login', loginRoutes)
app.use('/blog', onlyLoggedInUsers, blogRoutes)


app.listen(PORT, () => {
    console.log(`started on port: ${PORT}`)
})
