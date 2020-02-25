const twilio = require('twilio')
const client = new twilio(process.env.ACCOUNT_SID, process.env.AUTH_TOKEN) 

module.exports = {
    show: (request, response) => {
        console.log(request.params)
        client.availablePhoneNumbers(request.params.countryCode)
        .local
        .list({ areaCode: parseInt(request.params.areaCode), limit: parseInt(request.params.limit) })
        .then(local => local.forEach(l =>             
            console.log(l.friendlyName),
            console.log(local)))
        return response.json({ status: 200, message: `Successfully found Phone Numbers ${response.friendlyName}` })
    },
    buyPhoneNumber: (request, response) => {
        console.log(request.params)
        client.incomingPhoneNumbers
            .create({ phoneNumber: `${request.params.num}` })
            .then(incoming_phone_number => console.log(incoming_phone_number));
        return response.json({ status: 200, message: `Successfully bought Phone Number ${request.params.num}` })   
    },
    attachNumToMS: (request, response) => {
        console.log(request.params)
	    return client.messaging.services(request.params.mg_sid, (error, linkedMS) => {
            if (error) return response.status(500).json({
                status: 500,
                error,
                message: `Phone Number ${pn_sid} did not link to Messaging Service ${mg_sid}`
            })
            .phoneNumbers
            .create({phoneNumberSid: request.params.pn_sid})
            response.json({ status: 200, message: `Phone Number ${pn_sid} linked successfully to Messaging Service ${mg_sid}` })       })       
    },
    call: (request, response) => {
        console.log(request.params)
        client.calls.create({
            twiml: <Response><Say voice="alice">Ahoy! Twilio is calling you!</Say></Response>,
            to: '+19045371699',
            from: '+9046839073'
        })
        .then(call => console.log(call.sid))
        return response.json({ status: 200, message: `A phone call was made Successfully.` })
    }
}
