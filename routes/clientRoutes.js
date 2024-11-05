// Importing necessary modules
const express = require('express'); // Import Express
const Client = require('../models/client'); // Import the Client model

// Create a router instance
const router = express.Router();

// Retrieving all clients
router.get('/', async (req, res) => {
console.log("GET request received at /api/clients");
  try {
    const clients = await Client.find(); // Retrieve all clients from the database
    res.json(clients); // Respond with the clients in JSON format
  } catch (error) {
    console.error(error.message); // Log any errors
    res.status(500).send('Server Error'); // Respond with a server error
  }
});

// Adds a new client with specified details
router.post('/', async (req, res) => {
  const { name, email, phone } = req.body; // Destructure the request body

  try {
    // Create a new client instance
    const newClient = new Client({
      name,
      email,
      phone,
    });

    const client = await newClient.save(); // Save the new client to the database
    res.status(201).json(client); // Respond with the created client
  } catch (error) {
    console.error(error.message); // Log any errors
    res.status(500).send('Server Error'); // Respond with a server error
  }
});

// Export the router to use in app.js
module.exports = router;
