const express = require('express')
const mongoose = require('mongoose')
const Menus = require('./models/Menu')

// worker routers of workerRouters file
const workerRouter = require('./routes/workersRoutes')

// menu routers of menuRouters file
const menuRouter = require('./routes/menusRoutes')

//calling express app
const app = express()


//connecting to express app
const DB = "mongodb+srv://cairoCoffee:test@cluster0.pwxfm.mongodb.net/cairoCoffee?retryWrites=true&w=majority"
mongoose.connect(DB, { useNewUrlParser: true, UseUnifiedTopology: true })
    .then((result) => {
        console.log('Connected to DataBase')
        app.listen(3000)
    })
    .catch((err) => console.log(err))

//View engine
app.set('view engine', 'ejs')

//static files : middleware
app.use(express.static('public'))

app.get('/aboutus', (req, res) => {
    res.render('AboutUs', { title: 'About us' })
})

// calling routers
app.use(workerRouter)
app.use(menuRouter)

app.use((req, res) => {
    res.status(404).render('404', { title: 'Error' })
})