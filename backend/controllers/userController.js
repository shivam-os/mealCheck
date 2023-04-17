const User = require("../config/db").user;
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const validationErrors = require("../utils/validationErrors");
require("dotenv").config();

const checkExistingUser = async (email) => {
  try {
    const user = await User.findOne({ where: { email: email } });
    if (user) {
      return user;
    }
  } catch (err) {
    console.log(err);
  }
  return null;
};

//POST method to create a new user in the database
exports.register = async (req, res) => {
  //Handle validation errors coming from register validator
  validationErrors(req, res);

  try {
    const { name, email, password } = req.body;

    //Check if user with given email already exists in the database
    if (await checkExistingUser(email)) {
      return res.status(403).json({
        err: "User with given email id already exists!. Check the entered email or log in",
      });
    }

    //Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({ name: name, email: email, password: hashedPassword, roleId: 1 });
    return res.status(201).json({ msg: "User created successfully!" });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ err: "Something has went wrong. Please try again later!" });
  }
};

//POST method to login an existing user
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    //Check if user with email already exists in database
    const user = await checkExistingUser(email);
    if (!user) {
      return res
        .status(404)
        .json({ err: "User not found! Check email again or sign up." });
    }

    //Match the stored password from database with the entered password
    const matchedPassword = await bcrypt.compare(
      password,
      user.dataValues.password
    );
    if (!matchedPassword) {
      return res
        .status(400)
        .json({ err: "Incorrect email or password! Please try again." });
    }

    //Assign jwt
    const payload = { userId: user.dataValues.userId};
    const bearerToken = await jwt.sign(
      payload,
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: "3h",
      }
    );

    return res.status(201).json({ msg: `Welcome back ${user.dataValues.name}! You are now logged in.`,token: "Bearer " + bearerToken });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ err: "Something has went wrong. Please try again later!" });
  }
};


