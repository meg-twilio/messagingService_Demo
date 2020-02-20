require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser') //Used to parse requests so you can use its info
const app = express()
const routes = require("./src/api.js")
const run = require("./src/service.js")
const PORT = process.env.PORT || 8080;

// --------------------- MIDDLEWARE --------------------- //

app.use(bodyParser.urlencoded({ extended: false }));// Thus lets express know to use static files

// --------------------- ROUTES --------------------- //
app.use('/', express.static('./'))

// API Routes
app.get('/getPhoneNumbers', routes.get_phone_numbers);
app.get('/getBuyPhoneNumbers', routes.buy_phone_numbers);
app.get('/getCreateMgService', routes.create_mg_service);
app.get('/getAddPhoneNumbersToMgService', routes.add_phone_number_to_mg_service);
app.get('/testAvailableNumbers', routes.get_phone_numbers);
app.get('/testBuyPhoneNumbers', run.aquire_phone_numbers);
app.get('/testCreateMgService', run.make_service);

// --------------------- START SERVER --------------------- //
app.listen(PORT, function() {
	console.log(`MG App Started on Port ${PORT}`)
});
