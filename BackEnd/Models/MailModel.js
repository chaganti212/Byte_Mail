var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var mailSchema = new Schema({
  SentBy:String,
  SentTo:String,
  Subject:String,
  Body:String,
  SentOn:Date,
  Read:Boolean,
  TrashBySentBy:Boolean,
  TrashBySentTo:Boolean,
  DeleteBySentBy:Boolean,
  DeleteBySentTo:Boolean,
  RepliedTo:Object
},{ versionKey: false });


var mails = mongoose.model('mails', mailSchema);

module.exports = mails;
