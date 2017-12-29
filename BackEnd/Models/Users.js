var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var userSchema = new Schema({
  FirstName:String,
  LastName:String,
  EmailId:String,
  Password:String,
  DateOfBirth:Date,
  Gender:String,
  CreatedOn:Date
},{ versionKey: false });


var users = mongoose.model('users', userSchema);

module.exports = users;
