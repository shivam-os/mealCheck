//GET method to get all the meals of a user
exports.getAllMeals = async(req, res) => {
  try {

  } catch (err) {
    console.log(err);
    return res.status(500).json({err: "Something has went wrong. Please trye again later!"})
  }
}

//POST method to create a new meal for a user
exports.createMeal = async(req, res) => {
  try {

  } catch (err) {
    console.log(err);
    return res.status(500).json({err: "Something has went wrong. Please trye again later!"})
  }
}

//PUT method to update meal of an existing user with given mealId
exports.updateMeal = async(req, res) => {
  try {

  } catch (err) {
    console.log(err);
    return res.status(500).json({err: "Something has went wrong. Please trye again later!"})
  }
}

//DELETE method to delete an existing meal with given mealId
exports.deleteMeal = async(req, res) => {
  try {

  } catch (err) {
    console.log(err);
    return res.status(500).json({err: "Something has went wrong. Please trye again later!"})
  }
}



