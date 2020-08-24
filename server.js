const express = require('express');
const cors = require('cors');
require('dotenv').config();

const routes = require('./routes');
const port = process.env.PORT;
const app = express();

//CORS 
app.use(cors({
    origin: ['http://localhost:3000'],
    methods: "GET,POST,PUT,DELETE",
    optionsSuccessStatus: 200
}));  //mechanism that allows restricted resources on a web page to be requested from another domain

// MIDDLEWARE -JSON PARSON
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// MIDDLEWARE API ROUTES, ARTICLES
app.use('/api/v1/ballot', routes.ballot);

app.listen(port, function() {
    console.log(`Server is running on Port: ${port}`);
});