import mongoose from "mongoose";

const CountrySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  population: {
    type: String,
    required: true,
  },
  currency: {
    type: String,
    required: true,
  },
  capital: {
    type: String,
    required: true,
  },
  famous_people: {
    type: [String],
    required: true,
  },
});

export const countryModel = mongoose.model("countries", CountrySchema);
