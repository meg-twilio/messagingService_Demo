const twilio = require('twilio')
const client = new twilio(process.env.ACCOUNT_SID, process.env.AUTH_TOKEN) 

module.exports = {
    createMgService: (request, response) => {
        console.log(request.params)
        client.messaging.services
				.create({friendlyName: request.params.friendly_name})
                .then(service => console.log(service.sid))
        return response.json({ status: 200, message: `Succesffully created messaging service with FriendlyName ${request.params.friendlyName}` })
    }
}
