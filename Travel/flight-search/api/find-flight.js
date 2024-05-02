// const express = require('express');
// const app = express();
// const geminiAPI = require('./geminiAPI');
// const amadeusAPI = require('./amadeusAPI');

// app.post('/api/travel-plan', async (req, res) => {
//   try {
//     const userMessage = req.body.message;
//     const { destination, date, time, origin } = await geminiAPI.extractInfo(userMessage);
//     const flightDetails = await amadeusAPI.searchFlights(origin, destination, date, time);
//     const response = `Here are the flight details for your trip to ${destination}:
//       ${flightDetails.airline} - ${flightDetails.flightNumber}
//       Departure: ${flightDetails.departureTime}
//       Arrival: ${flightDetails.arrivalTime}
//       Book now at: ${flightDetails.bookingLink}`;
//     res.json({ message: response });
//   } catch (error) {
//     console.error('Error:', error);
//     res.status(500).json({ error: 'An error occurred' });
//   }
// });

// app.listen(3000, () => {
//   console.log('Server is running on port 3000');
// });