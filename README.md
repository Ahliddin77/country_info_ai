# AI-Powered Country Info App

This application uses OpenAI's GPT model to fetch detailed information about countries and saves the data to a MongoDB database.

## Features

1. **AI-Powered Country Info**:
   - Fetch detailed information about a country (name, population, currency, capital, and famous people).
   - Save the fetched country information to a MongoDB database.
2. **Database Integration**:
   - Store and retrieve country information from MongoDB.

## Endpoints

- `GET /country-info/:country` - Fetch detailed information about a country and save it to the database.
- `GET /countries` - Retrieve all saved country information from the database.

## Technologies Used

- **Node.js**: Backend runtime.
- **Express.js**: Web framework for building RESTful APIs.
- **MongoDB**: Database for storing country information.
- **Mongoose**: ODM for MongoDB.
- **OpenAI API**: For AI-powered country information.
