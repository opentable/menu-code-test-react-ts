const express = require('express')
export const router = express.Router()

router.get('/', function (req, res) {
  res.send('hello world')
});
