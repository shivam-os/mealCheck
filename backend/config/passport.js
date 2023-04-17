const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const User = require("../config/db").user;
require("dotenv").config();

//Options for jwt strategy
const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken,
  secretOrKey: process.env.ACCESS_TOKEN_SECRET,
};

module.exports = (Passport) => {
  Passport.use(
    new JwtStrategy(options, async (jwt_payload, done) => {
      try {
        //Check if user with given userId exists in database
        const existingUser = await User.findOne({
          where: { userId: jwt_payload.userId },
          attributes: ["userId"],
        });

        //If user exists, then send the userId in req
        if (existingUser) {
          return done(null, existingUser);
        } else {
          return done(null, false);
        }
      } catch (err) {
        return done(null, false);
      }
    })
  );
};
