require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser') //Used to parse requests so you can use its info
const app = express()
const routes = require("./routes")
const PORT = process.env.PORT || 8080;

// --------------------- MIDDLEWARE --------------------- //

app.use(bodyParser.urlencoded({ extended: false }));// Thus lets express know to use static files

// --------------------- ROUTES --------------------- //
app.use('/', express.static('./'))

// API Routes
app.get('/api', routes.api);
app.get('/service', routes.service)

// --------------------- START SERVER --------------------- //
app.listen(PORT, function() {
	console.log(`MG App Started on Port ${PORT}`)
});
