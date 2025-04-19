import express from "express";
import { getCountryInfo } from "./utils/ai.js";
import { saveCountryInfo } from "./controllers/country.controller.js";

const app = express();
app.use(express.json());

// Test API
app.get("/", (req, res) => {
  res.send("Hello World");
});
// Country Info
app.get("/country-info/:country", async (req, res) => {
  const countryName = req.params.country;

  try {
    const countryInfo = await getCountryInfo(countryName);

    await saveCountryInfo(countryInfo);

    res.send(countryInfo);
  } catch (error) {
    res
      .status(500)
      .send({ error: "Failed to fetch or save country information" });
  }
});

export default app;
