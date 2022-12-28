import passport from "passport";
import GoogleStrategy from "passport-google-oauth2";
import {} from "dotenv";

const Strategy = GoogleStrategy.Strategy;

passport.serializeUser((user: any, done: any) => done(null, user));

passport.deserializeUser((user: any, done: any) => done(null, user));

passport.use(
  new Strategy(
    {
      clientID:
        "1009273497122-qqtr6t0ckd172l9h3ln7cbnfjid7ka5o.apps.googleusercontent.com",
      clientSecret: "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",
      callbackURL: "http://localhost:4000/auth/callback",
      passReqToCallback: true,
    },
    function (
      request: any,
      accessToken: any,
      refreshToken: any,
      profile: any,
      done: (arg0: null, arg1: any) => any
    ) {
      return done(null, profile);
    }
  )
);
