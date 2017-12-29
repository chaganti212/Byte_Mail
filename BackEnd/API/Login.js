var express = require('express');
var app = express();
var router = express.Router();
var jwt    = require('jsonwebtoken'); // used to create, sign, and verify tokens

var config = require('../config'); // get our config file
app.set('superSecret', config.secret);

User = require('../Models/Users');

router.post('/authenticate', function(req, res) {

  // find the user
  User.findOne({
    EmailId: req.body.EmailId
  }, function(err, user) {

    if (err) throw err;

    if (!user) {
      res.json({ success: false, message: 'Authentication failed. User not found.' });
    } else if (user) {

      // check if password matches
      if (user.Password != req.body.password) {
        res.json({ success: false, message: 'Authentication failed. Wrong password.' });
      } else {

        // if user is found and password is right
        // create a token with only our given payload
    // we don't want to pass in the entire user since that has the password
    const payload = {
    emailId : user.EmailId,
    FirstName : user.FirstName
    };
        var token = jwt.sign(payload, app.get('superSecret'), {
          expiresIn: '1 day' // expires in 24 hours
        });

        // return the information including token as JSON
        res.json({
          success: true,
          message: "Token created expires in 1 day",
          token: token
        });
      }

    }

  });
});


module.exports = router;
