const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const notificationRoutes= require('./routes/notificationRoutes')


const app = express();
const server = require('http').Server(app);



connectDB();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({
  origin: ["http://localhost:3000"],
  methods:   ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

// require('./Socket/chatManager')(server)

app.use('/' , notificationRoutes);



server.listen(8001, () => {
  console.log(`Server is running on port  || 8001`);
});