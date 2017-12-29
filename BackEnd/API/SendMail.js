var express = require('express');
var router = express.Router();
//mailer = require('express-mailer');

Email = require('../Models/MailModel');

var currentDate = new Date();

// mailer.extend(app, {
//   from: 'no-reply@example.com',
//   host: 'smtp.gmail.com', // hostname
//   secureConnection: true, // use SSL
//   port: 465, // port for secure SMTP
//   transportMethod: 'SMTP', // default is SMTP. Accepts anything that nodemailer accepts
//   auth: {
//     user: 'gmail.user@gmail.com',
//     pass: 'userpass'
//   }
// });

router.post('/api/sendmail',function(req, res){
  // app.mailer.send('email', {
  //   to: 'example@example.com', // REQUIRED. This can be a comma delimited string just like a normal email to field.
  //   subject: 'Test Email', // REQUIRED.
  //   otherProperty: 'Other Property' // All additional properties are also passed to the template as local variables.
  // }, function (err) {
  //   if (err) {
  //     // handle error
  //     console.log(err);
  //     res.send('There was an error sending the email');
  //     return;
  //   }
  //   res.send('Email Sent');
  // });
   var email = new Mail({
    "SentBy":req.decoded.emailId,
    "SentTo":req.body.SentTo,
    "Subject":req.body.subject,
    "Body":req.body.Message,
    "SentOn":currentDate,
    "ReadBySentBy":false,
    "ReadBySentTo":false,
    "TrashBySentBy":false,
    "TrashBySentTo":false,
    "DeleteBySentBy":false,
    "DeleteBySentTo":false,
    "RepliedTo":req.body.replyto
  });

  email.save(function(err, suc){
    res.send(suc);
  });
});


module.exports = router;
