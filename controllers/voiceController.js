const twilio = require('twilio')
const client = new twilio(process.env.ACCOUNT_SID, process.env.AUTH_TOKEN) 

module.exports = {
    call: (request, response) => {
        console.log(request.params)
        client.calls.create({
            to: request.params.phoneNumber,
            from: '+19046829073',
            url: "https://handler.twilio.com/twiml/EHc2bd22efbe2940182019d3ef7dc5be26" // TwiML Bin URL. 
        })
        .then(call => console.log(call.sid))
        return response.json({ status: 200, message: 'Successfully called ' })
    }
}
