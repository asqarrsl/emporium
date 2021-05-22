// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
// const accountSid = process.env.TWILIO_ACCOUNT_SID;
// const authToken = process.env.TWILIO_AUTH_TOKEN;
import dotenv from 'dotenv';
dotenv.config();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
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