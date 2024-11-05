// Importing mongoose to define the schema and model
const mongoose = require('mongoose');

// Define the Client schema
const clientSchema = new mongoose.Schema({
  name: {
    type: String,  // The name of the client
    required: true, // This field is mandatory
  },
  email: {
    type: String,  // The client's email address
    required: true, // This field is mandatory
    unique: true,   // Ensure email is unique across clients
  },
  phone: {
    type: String,  // The client's phone number
    required: true, // This field is mandatory
  },
  createdAt: {
    type: Date,    // Timestamp for when the client was created
    default: Date.now, // Default to the current date
  },
});

// Create the Client model based on the schema
const Client = mongoose.model('Client', clientSchema);

// Export the Client model to use it in other parts of the application
module.exports = Client;
