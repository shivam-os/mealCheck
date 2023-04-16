//POST method to create a new user in the database
exports.register = async(req, res) => {
  try {

  } catch (err) {
    console.log(err);
    return res.status(500).json({err: "Something has went wrong. Please trye again later!"})
  }
}

//POST method to login an existing user
exports.login = async(req, res) => {
  try {

  } catch (err) {
    console.log(err);
    return res.status(500).json({err: "Something has went wrong. Please trye again later!"})
  }
}
