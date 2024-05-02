const express = require('express');
const dotenv = require('dotenv');
const { extractTravelDetails } = require('./api/gemini');
const { searchFlights } = require('./api/amadeus');

dotenv.config();

const app = express();
app.use(express.json());

app.post('/api/travel-plan', async (req, res) => {
  try {
    const userInput = req.body.userInput;

    // Extract travel details using Gemini API
    const extractedData = await extractTravelDetails(userInput);
    const { destination, departureDate, origin } = extractedData;

    // Search for flights using Amadeus API
    const flightOffers = await searchFlights(origin, destination, departureDate);
    const selectedFlight = flightOffers[0];

    // Compose the response message with the flight details
    const responseMessage = `Here's a suitable flight for your trip to ${destination}:
      Departure: ${selectedFlight.itineraries[0].segments[0].departure.iataCode} on ${selectedFlight.itineraries[0].segments[0].departure.at}
      Arrival: ${selectedFlight.itineraries[0].segments[0].arrival.iataCode} on ${selectedFlight.itineraries[0].segments[0].arrival.at}
      Price: ${selectedFlight.price.total} ${selectedFlight.price.currency}
      Book now at: ${selectedFlight.links.bookingLink}
    `;

    res.json({ message: responseMessage });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});