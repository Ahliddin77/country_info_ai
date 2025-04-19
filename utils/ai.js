import OpenAI from "openai";
const client = new OpenAI({
  apiKey: process.env.OPENAI_KEY,
});

export async function getCountryInfo(countryName) {
  const response = await client.chat.completions.create({
    model: "gpt-4.1-nano",
    messages: [
      {
        role: "user",
        content: `Provide detailed information about the country "${countryName}" in the following JSON schema:
        {
          country: {
            name: "string",
            population: "string",
            currency: "string",
            capital: "string",
            famous_people: ["string", "string", ...]
          }
        }`,
      },
    ],
    response_format: {
      type: "json_object",
    },
  });

  try {
    const parsedJSON = JSON.parse(response.choices[0].message.content);
    return parsedJSON.country;
  } catch (error) {
    throw new Error("Error while parsing OpenAI response: " + error);
  }
}
