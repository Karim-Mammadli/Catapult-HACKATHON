const axios = require("axios");
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

const MODEL_NAME = "gemini-1.5-pro-latest";
console.log("Loading model:", MODEL_NAME);

async function extractTravelDetails(userInput) {
  try {
    const response = await axios.post("https://api.gemini.com/v1/extractions", {
      q: userInput,
      api_key: GEMINI_API_KEY,
    });

    return response.data;
  } catch (error) {
    console.error("Error in Gemini API:", error);
    throw error;
  }
}

module.exports = {
  extractTravelDetails,
};
