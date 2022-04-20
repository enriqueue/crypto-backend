const { request, response } = require('express');

const getController = (req = request, res = response) => {
    res.render('index');
}

module.exports = {
    getController, 
}