const Article = require('../../models/article');
const Comment = require('../../models/comment');

exports.getAll = (req, res) => {
  Article.find()
  .populate('comments')
  .populate('categories')
  .exec((err, data) => {
    if (err) return res.send(err, 'Error finding all Articles');
    res.json({message: 'Found Articles', data});
  });
};

exports.getOne = (req, res) => {
  Article.findById(req.params.article_id)
  .populate('comments')
  .populate('categories')
  .exec((err, data) => {
    if (err || !data) {
      res.json({err: err, message: 'No Data Found With That ID'});
    } else {
      res.json({message: 'Article Found', data});
    }
  });
};

exports.createOne = (req, res) => {
  const newArticle = new Article({
    title: req.body.title,
    content: req.body.content,
    categories: req.body.categories,
  });
  console.log('about to create new article', newArticle)
  newArticle.save((err, data) => {
    if (err) return res.send(err);
    res.json({message: 'Article Created', data});
  });
};

// 592dc6ea9a7eaf6c7b0c988f
// 592dc6ed9a7eaf6c7b0c9890
// 592dc6f19a7eaf6c7b0c9891

exports.createComment = (req, res) => {
  const newComment = new Comment({
    message: req.body.message,
  });

  newComment.save((err, com) => {
    if(err) res.send(err)
      Article.findById(req.params.article_id, (err, article) => {
        if (err) return res.send(err);
        article.comments.push(com._id)
        article.save((err) => {
            if (err) return res.send(err);
            res.json({message: 'Comment Created', article});
          })
      })
  })

}

exports.removeOne = (req, res) => {
  Article.remove({_id: req.params.article_id}, err => {
    if (err) {
      res.send(err);
    } else {
      res.json({message: 'Article Destroyed'});
    }
  });
};

exports.editOne = (req, res) => {
  Article.findById(req.params.article_id, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      data.title = req.body.title ? req.body.title : data.title;
      data.content = req.body.content ? req.body.content : data.content;
      data.save((err, response) => {
        if (err) res.send(err);
        res.json(response);
      });
    }
  });
};
