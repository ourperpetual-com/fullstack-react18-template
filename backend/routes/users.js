var express = require('express');
var router = express.Router();

const db = require('../db');

/* GET users listing. */
router.get('/', async (req, res, next) => {
  try {
    const { rows } = await db.query('SELECT NOW()');
    res.json(rows);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
