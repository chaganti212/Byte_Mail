var express = require('express');
var router = express.Router();

User = require('../Models/Users');
var currentDate = new Date();
//Register
router.post('/api/Register',function(req, res){
  var date = new Date();
  var NU = new User({
    "FirstName": req.body.FirstName,
    "LastName": req.body.LastName,
    "EmailId":req.body.EmailId,
    "Password":req.body.Password,
    "DateOfBirth":req.body.DateOfBirth,
    "Gender":req.body.Gender,
    "CreatedOn":currentDate
  });
  NU.save(function(err,data){
    res.send(data);
  });
});

module.exports = router;

