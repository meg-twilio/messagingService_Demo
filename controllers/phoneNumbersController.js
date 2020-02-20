const twilio = require('twilio')
const client = new twilio(process.env.ACCOUNT_SID, process.env.AUTH_TOKEN) 

function getTime() {
    return new Date().toLocaleDateString();
};

module.exports = {
    show: (request, response) => {
        client.availablePhoneNumbers(request.params.countryCode, (error, foundNumber) => {
            if (error) return response.status(500).json({
                status: 500,
                error,
                message: 'Something went wrong. please try again'
            });

            return response.json({ status: 200, message: foundNumber})
        }).local
        .list({ areaCode: request.params.areaCode, limit: request.params.limit })
        .then(local => local.forEach(l => console.log(l.friendlyName)));
    }
}