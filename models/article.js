const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArticleSchema = Schema({
  title: {required: true, type: String},
  content: String
});

module.exports = mongoose.model('Article', ArticleSchema);
