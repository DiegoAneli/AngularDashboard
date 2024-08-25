const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const authRoutes = require('./routes/auth');
const authMiddleware = require('./middleware/auth');

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

app.use('/auth', authRoutes);

app.get('/dashboard', authMiddleware, (req, res) => {
  res.send({ message: 'Welcome to the dashboard!' });
});

app.listen(4000, () => {
  console.log('Server running on port 4000');
});
