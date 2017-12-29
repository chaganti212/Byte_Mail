var express = require('express');
var router = express.Router();
Mail = require('../Models/MailModel');
User = require('../Models/Users');

router.get('/api/inbox',function(req, res){
  Mail.find({SentTo:req.decoded.id, Trash: false},function(err, doc){
    res.send(doc);
  });
});

router.get('/api/SentMails',function(req, res){
  Mail.find({SentBy:req.decoded.emailId, Trash: false},function(err, doc){
    res.send(doc);
  });
});

router.delete('/api/deleteEmail',function(req, res){

});

router.get('/api/trash',function(req, res){
  Mail.find({Trash:false, $or: [{SentTo:req.decoded.id},{SentBy:req.decoded.id}]}).then(function(doc){
    res.send(doc);
  });
});

router.delete('/api/TrashMail',function(req,res){
var curMail;
  for(var i =0; i< req.id.lenght; i++){
     curMail[i] = Mail.find({_id: req.id});
  }
for(var j=0; j< currMail.lenght; j++){
  if (curMail[j].SentBy == req.decoded.id ) {
    Mail.update({_id: req.id}, { $set: { TrashBySentBy: true }});
  }
  else{
    Mail.update({_id: req.id}, { $set: { TrashBySentTo: true }});
  }
}
});

router.delete('/api/DeleteMail',function(req,res){
var curMail;
  for(var i =0; i< req.id.lenght; i++){
     curMail[i] = Mail.find({_id: req.id});
  }
for(var j=0; j< currMail.lenght; j++){
  if (curMail[j].SentBy == req.decoded.id ) {
    Mail.update({_id: req.id}, { $set: { DeleteBySentBy: true }});
  }
  else{
    Mail.update({_id: req.id}, { $set: { DeleteBySentTo: true }});
  }
}
});

// router.delete('/api/dropCollection', function(req, res){
//   Mail.collection.dropCollection();
// });


router.get('/api/getAllUsers',function(req,res){
    console.log("I am about to get all users ");
    User.find({},function(err, users){
        res.send(users);
    });
});


module.exports = router;
