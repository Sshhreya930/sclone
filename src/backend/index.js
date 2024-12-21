const express = require('express');
const app = express();
const cors = require('cors');

// Middleware
app.use(express.json());
app.use(cors());

// Signup Endpoint
app.post('/signup', (req, res) => {
  const { name, email, password } = req.body;
  // Process the data (e.g., save to database)
  res.status(200).json({ message: 'Signup Successful' });
});

// Start the server
app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});
