const express = require('express')
export const router = express.Router()

import menuData from "./menu-data.json";

router.get('/health', function (req, res) {
  res.send('OK')
});

router.get('/menu', function (req, res) {
  res.send(menuData);
});
