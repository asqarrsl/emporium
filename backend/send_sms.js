// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
// const accountSid = process.env.TWILIO_ACCOUNT_SID;
// const authToken = process.env.TWILIO_AUTH_TOKEN;
const accountSid = "AC845245dc61f7758d95166fa22cd24c1c";
const authToken = "9409c2f0a7cb31b52ca842339713ff12";
import clients from 'twilio'
const client = clients(accountSid, authToken)
// const client = require('twilio')(accountSid, authToken);
const smsGateway = (to,code) =>{
  console.log(to);
  console.log(code);
  client.messages.create({
     body: `Your Verification Code is ${code}`,
     from: '+12727700638',
     to: `+${to}`
   }).then(message => {return({message : message.sid})});
}

export default smsGateway;