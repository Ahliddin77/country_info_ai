import express from "express";
import passport from "passport";

const router = express.Router();

router.get(
  "/auth/github",
  passport.authenticate("github", { scope: ["user:email"] })
);

router.get(
  "/auth/github/callback",
  passport.authenticate("github", { failureRedirect: "/" }),
  (req, res) => {
    res.send("GitHub Authentication Successful!");
  }
);

export default router;
