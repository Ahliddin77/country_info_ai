import { getCountryInfo } from "../utils/ai.js";
import { countryModel } from "../models/country.model.js";

export async function getCountryInfoHandler(req, res) {
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
}

export async function getAllCountriesHandler(req, res) {
  try {
    const countries = await countryModel.find();
    res.send(countries);
  } catch (error) {
    res.status(500).send({ error: "Failed to fetch countries from database" });
  }
}

export async function saveCountryInfo(countryData) {
  try {
    const newCountry = new countryModel(countryData);
    await newCountry.save();
    console.log("Country information saved successfully!");
  } catch (error) {
    console.error("Error saving country information:", error);
  }
}
