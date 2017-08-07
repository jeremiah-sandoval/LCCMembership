const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Member Schema and Model
const MemberSchema = new Schema({
  firstname: {
    type: String
  },
  lastname: {
    type: String
  },
  age: {
    type: String
  },
  sex: {
    type: String
  }
});

const Member = mongoose.model('member', MemberSchema);

module.exports = Member;
