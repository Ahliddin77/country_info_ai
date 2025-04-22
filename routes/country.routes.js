import express from "express";
import {
  getCountryInfoHandler,
  getAllCountriesHandler,
} from "../controllers/country.controller.js";

const router = express.Router();

router.get("/country-info/:country", getCountryInfoHandler);

router.get("/countries", getAllCountriesHandler);

export default router;
