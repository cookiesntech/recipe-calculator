const express = require('express');
const router = express.Router();
const menuController = require('../controllers/menuController');
//const { ensureAuth, eunsureGuest } = require("../middleware/auth");

router.get('/', menuController.getMenu);

module.exports = router;