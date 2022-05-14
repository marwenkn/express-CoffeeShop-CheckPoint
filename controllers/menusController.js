const Menus = require('../models/Menu')

const menusGet = (req, res) => {
    Menus.find()
        .then(result => {
            res.render('Services', { title: 'Services', product: result })
        })
        .catch(err => {
            console.log(err)
        })
}

module.exports = menusGet