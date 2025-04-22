import express from "express";
import session from "express-session";
import passport from "./auth/passport.js";
import authRoutes from "./routes/auth.routes.js";
import countryRoutes from "./routes/country.routes.js";

const app = express();
app.use(express.json());

app.use(
  session({
    secret: "your_secret_key",
    resave: false,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/", authRoutes);
app.use("/", countryRoutes);

export default app;
