const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArticleSchema = Schema({
  title: {required: true, type: String},
  content: String,
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}],
  categories: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Category' }]
});

module.exports = mongoose.model('Article', ArticleSchema);
