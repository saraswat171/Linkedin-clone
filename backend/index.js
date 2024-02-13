const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes')
const app = express();
require('dotenv').config()
// Connect to MongoDB
connectDB();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({
  origin: ["http://localhost:3000"],
  methods:  ['POST','GET'],
  credentials: true
}));
app.use('/uploads', express.static('uploads')) // important

// Routes
app.use('/', authRoutes);
app.use('/', userRoutes);
app.use('/', postRoutes);

// const PORT =  || 8080;
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});