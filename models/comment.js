const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = Schema({
  message: String
});

module.exports = mongoose.model('Comment', CommentSchema);
