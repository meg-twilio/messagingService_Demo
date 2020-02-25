
const twilio = require('twilio')
const router = require('express').Router()
const ctrl = require('../controllers');

// Endpoint => '/api'

// API Routes
router.get('/getPhoneNumbers/country_code=:countryCode/limit=:limit/area_code=:areaCode', ctrl.phoneNumbers.show);
router.post('/buyPhoneNumbers/:num', ctrl.phoneNumbers.buyPhoneNumber);
router.post('/attachNumToMS/:mg_sid/:pn_sid', ctrl.phoneNumbers.attachNumToMS);
router.post('/create_mg_service/:friendlyName', ctrl.msgService.createMgService);
router.post('/call', ctrl.phoneNumbers.call);


// router.post('/:number', ctrl.phoneNumbers.buyNumber);




// // Create MG Service
// const create_mg_service = (friendly_name) => {
// 	return client.messaging.services
// 				.create({friendlyName: friendly_name})
// 				.then(service => console.log(service.sid))
// }

// // Search for a phone Number
// // Get a list of available phone numbers based on area code
// const get_phone_numbers = () => {
// 	console.log("inside api.get_phone_numbers")
// 	return client.availablePhoneNumbers('US')
// 	      	 .local
// 	      	 .list({areaCode: 310, limit: 2})      		
// }

// // Buy a phonenumber
// const buy_phone_numbers = (num) => {
// 	return client.incomingPhoneNumbers
// 		     .create({phoneNumber: `${num}`})
		     
// }

// // Display Results
// // Add Phone Numbers to MG Service
// const add_phone_number_to_mg_service = (mg_sid, pn_sid) => {
// 	return client.messaging.services(mg_sid)
//                 .phoneNumbers
//                 .create({phoneNumberSid: pn_sid})
// }

module.exports = router;
