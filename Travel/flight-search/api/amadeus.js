const axios = require('axios');
const AMADEUS_API_KEY = process.env.AMADEUS_API_KEY;
const AMADEUS_API_SECRET = process.env.AMADEUS_API_SECRET;

async function searchFlights(origin, destination, departureDate) {
  try {
    const response = await axios.get('https://test.api.amadeus.com/v2/shopping/flight-offers', {
      params: {
        originLocationCode: origin,
        destinationLocationCode: destination,
        departureDate: departureDate,
        adults: 1,
      },
    //   headers: {
    //     'Authorization': `Bearer ${AMADEUS_API_KEY}:${AMADEUS_API_SECRET}`,
    //   },
    });

    return response.data.data;
  } catch (error) {
    console.error('Error in Amadeus API:', error);
    throw error;
  }
}

module.exports = {
  searchFlights,
};