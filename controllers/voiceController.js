const twilio = require('twilio')
const client = new twilio(process.env.ACCOUNT_SID, process.env.AUTH_TOKEN) 
const VoiceReponse = require('twilio').twiml.VoiceResponse;
const urlencoded = require('body-parser').urlencoded;

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
    },
    conference: (request, response) => {
        console.log(request.params)
        const MODERATOR = request.params.moderator

        // use the Twilio Node.js SDK to build an XML response
        const twiml = new VoiceReponse();

        // Start with a <Dial> verb
        const dial = twiml.dial();

        // If the caller is our MODERATOR, then start the conference when they join and end the conference when they leave
        if (request.body.From == MODERATOR) {
            dial.conference('My conference', {
                startConferenceOnEnter: true,
                endConferenceOnExit: true
            });
        } else {
            // Otherwise have the caller join as a regular participant
            dial.conference('My conference', {
                startConferenceOnEnter: false
            });
        }

        // Render the response as XML in reply to the webhook request
        response.type('text/xml');
        response.send(twiml.toString());
    }

}
