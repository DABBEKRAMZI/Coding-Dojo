const express = require('express');
require('dotenv').config();
const app = express();
const cors = require('cors');

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//connect with Database
require('./config/mongoose.config');

//import routes
require('./routes/authors.routes')(app);


app.listen(process.env.port, () => console.log(`SERVER IS RUNNING ON PORT ${process.env.port}`))