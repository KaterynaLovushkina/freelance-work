const express = require('express');
const app = express();
const mongoose = require('mongoose');
const uri = "mongodb+srv://kate:kate1234@cluster1.y22sviv.mongodb.net/MyDB?retryWrites=true&w=majority";
const bodyParser = require('body-parser');
const cors = require('cors');

// Define a Mongoose schema
const dataSchema = new mongoose.Schema({
  firstName: String,
  email: String,
  phone: String,
});

// Create a Mongoose model
const Data = mongoose.model('Data', dataSchema);

// Function to connect to MongoDB
async function connect() {
  try {
    await mongoose.connect(uri);
    console.log('Connected to the database');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

// Connect to MongoDB
connect();

// Start the Express.js server
app.listen(3334, () => {
  console.log('Application listening on port 3334!');
});

// Enable CORS (Cross-Origin Resource Sharing) middleware
app.use(cors());

// Parse incoming JSON data
app.use(bodyParser.json());

// Handle POST request to create a new user
app.post('/api/user', async (req, res) => {
  try {
    // Extract data from the request body
    const { firstName, email, phone } = req.body;

    // Create a new document using the Data model
    const newData = new Data({ firstName, email, phone });

    // Save the document to the database
    await newData.save();

    res.status(201).json({ message: 'Data saved successfully' });
  } catch (err) {
    console.error('Error saving data:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Handle GET request to retrieve all unique user emails
app.get('/all-users', async (req, res) => {
  try {
    // Retrieve all documents from the Data collection
    const users = await Data.find();

    // Extract the unique email addresses from the user documents
    const uniqueEmails = [...new Set(users.map((user) => user.email))];

    res.status(200).json(uniqueEmails);
  } catch (err) {
    console.error('Error fetching user emails:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

