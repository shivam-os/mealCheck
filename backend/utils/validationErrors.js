const { validationResult } = require("express-validator");

//Handle validation errors 
module.exports = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ err: errors.array() });
  }
};
