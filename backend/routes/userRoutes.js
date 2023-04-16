const express = require("express");
const router = express.Router();

//POST method to create a new user
router.post("/register");

//POST method to login an existing user
router.post("/login");

module.exports = router;
