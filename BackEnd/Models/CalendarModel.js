var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var calendarSchema = new Schema({
  CreatedBy:Object,
  EventName:String,
  Participants:Array,
  EventDate:String,
  CreatedOn:Date,
},{ versionKey: false });


var calendars = mongoose.model('calendars', calendarSchema);

module.exports = calendars;
