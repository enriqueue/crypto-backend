const { Router } = require('express');

const router = new Router;

const { getController } = require('../controllers/routesCtrl');

router.get('', getController);

module.exports = router;