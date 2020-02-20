const twilio = require('twilio')
const express = require('express');
const client = new twilio(process.env.ACCOUNT_SID, process.env.AUTH_TOKEN) 
const router = require('express').Router()
const ctrl = require('../controllers');

// Create a messgaing service
const make_service = () => {
	api.create_mg_service('service_123')
		.then(mg =>  {
			console.log(mg.sid)
		})
}


// Get a list of phone numbers, buy them, then add them to a messaging service
// Add your MG SID to line 19
const aquire_phone_numbers = () => {
	api.get_phone_numbers()
		.then(phoneNumber => phoneNumber.forEach(p => api.buy_phone_numbers(p.friendlyName)
			.then(pnSid => api.add_phone_number_to_mg_service('MG****************', pnSid.sid))
			)
		)
}

module.exports = router;