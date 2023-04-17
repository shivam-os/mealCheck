const express = require("express");
const router = express.Router();
const mealValidator = require("../utils/mealValidator");
const mealController = require("../controllers/mealController");

//GET method to return all the meals of the user
router.get("/", mealController.getAllMeals);

//POST method to create a new meal for the user
router.post("/", mealValidator.createMeal, mealController.createMeal);

//PUT method to update an existing meal of the user
router.put("/:mealId", mealValidator.createMeal, mealController.updateMeal);

//DELETE method to delete an existing meal with given id
router.delete("/:mealId", mealController.deleteMeal);

module.exports = router;
