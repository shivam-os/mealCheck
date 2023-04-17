const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const userValidator = require("../utils/userValidator");

//POST method to create a new user
router.post("/register", userValidator.register, userController.register);

//POST method to login an existing user
router.post("/login", userValidator.login, userController.login);

module.exports = router;
