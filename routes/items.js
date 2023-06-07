const { Router } = require('express');
const router = Router();

const { getAll } = require('../controllers/itemController');

router.get('/all', getAll);

module.exports = router;

