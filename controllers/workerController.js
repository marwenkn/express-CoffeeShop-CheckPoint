const Workers = require('../models/Workers')

const workerGet = (req, res) => {
    Workers.find()
        .then(result => {
            res.render('Home', { title: 'Home', staff: result })
        })
        .catch(err => {
            console.log(err)
        })
}

module.exports = workerGet