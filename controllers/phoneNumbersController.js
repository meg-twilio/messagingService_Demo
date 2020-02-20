const twilio = require('twilio')
const client = new twilio(process.env.ACCOUNT_SID, process.env.AUTH_TOKEN) 

module.exports = {
    show: (request, response) => {
        client.availablePhoneNumbers(request.params.countryCode)
        .local
        .list({ areaCode: request.params.areaCode, limit: request.params.limit })
        .then(local => local.forEach(l => console.log(l.friendlyName)));
    }
}