import passport from "passport";
import { ExtractJwt, Strategy as JWTstrategy } from "passport-jwt";

import { JWT_SECRET_KEY } from "../config";
import { User } from "../models/User";

//This verifies that the token sent by the user is valid
passport.use(
  new JWTstrategy(
    {
      secretOrKey: JWT_SECRET_KEY,
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    },
    async (token, done) => {
      try {
        const { user_id } = token;
        const user = await User.findById(user_id);
        if (!user) return done(null, false, "User not found");
        //Pass the user details to the next middleware
        return done(null, user);
      } catch (error) {
        done(error);
      }
    }
  )
);
