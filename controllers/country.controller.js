import { countryModel } from "../models/country.model.js";

export async function saveCountryInfo(countryData) {
  try {
    const newCountry = new countryModel(countryData);
    await newCountry.save();
    console.log("Country information saved successfully!");
  } catch (error) {
    console.error("Error saving country information:", error);
  }
}
