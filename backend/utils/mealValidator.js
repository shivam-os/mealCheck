const { body } = require("express-validator");

exports.createMeal = [
  body("name")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Name field cannot be empty!")
    .isLength({ min: 3, max: 100 })
    .withMessage(
      "Name field must contain minimum 3 letters and maximum 100 letters!"
    )
    .isAlpha("en-US", { ignore: " " })
    .withMessage(
      "Name field cannot contain any numbers or special characters!"
    ),

  body("time")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Time field cannot be empty!"),

  body("calories")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Calories field cannot be empty!")
    .isLength({ min: 1, max: 5 })
    .withMessage(
      "Calories field must contain minimum 1 letter and maximum 5 letters!"
    ),
    
  body("servings")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Servings field cannot be empty!")
    .isLength({ min: 1, max: 3 })
    .withMessage(
      "Servings field must contain minimum 1 letter and maximum 3 letters!"
    ),
];
