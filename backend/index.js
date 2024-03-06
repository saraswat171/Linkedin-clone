const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');


const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');
const commentRoutes = require('./routes/commentRoutes')
const reactionRoutes = require('./routes/reactionRoutes')
const connectionRoutes = require('./routes/connectionRoutes')
const roomRoutes = require('./routes/roomRoutes')
const messageRoutes = require('./routes/messageRoutes')
const app = express();
const server = require('http').Server(app);

require('dotenv').config()
// port validation

// if(!process.env.PORT){
//   process.exit();
// }

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({
  origin: ["http://localhost:3000"],
  methods:   ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));
app.use('/uploads', express.static('uploads')) // important
require('./Socket/chatManager')(server)

// Routes
app.use('/', authRoutes);
app.use('/', userRoutes);
app.use('/', postRoutes);
app.use('/',commentRoutes);
app.use('/',reactionRoutes);
app.use('/', connectionRoutes);
app.use('/' , roomRoutes);
app.use('/' , messageRoutes);




server.listen(process.env.PORT || 8080, () => {
  console.log(`Server is running on port ${process.env.PORT} || 8080`);
});