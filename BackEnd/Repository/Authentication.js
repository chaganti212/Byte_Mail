var express = require('express');
var app = express();
var router = express.Router();
var jwt    = require('jsonwebtoken'); // used to create, sign, and verify tokens

var config = require('../config'); // get our config file
app.set('superSecret', config.secret);

// route middleware to verify a token
router.use(function(req, res, next) {
  console.log("I am in authentication");
  // check header or url parameters or post parameters for token
  var token = req.body.token || req.query.token || req.headers['x-access-token'] || req.headers.authorization;
  console.log(req.headers.authorization);
  // decode token
  if (token) {

    // verifies secret and checks exp
    jwt.verify(token, app.get('superSecret'), function(err, decoded) {
      console.log(err);
      console.log(decoded);
      if (err) {
        return res.json({ success: false, message: 'Failed to authenticate token.' });
      } else {
        // if everything is good, save to request for use in other routes
          console.log("verified");
          req.decoded = decoded;
          next();
      }
    });

  } else {

    // if there is no token
    // return an error
    return res.status(403).send({
        success: false,
        message: 'No token provided.'
    });

  }
});

module.exports = router;
