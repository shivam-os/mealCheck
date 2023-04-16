const express = require("express");
const router = express.Router();

//GET method to return all the meals of the user
router.get("/");

//POST method to create a new meal for the user
router.post("/")

//PUT method to update an existing meal of the user
router.put("/:mealId");

//DELETE method to delete an existing meal with given id
router.delete("/:mealId");

module.exports = router;
