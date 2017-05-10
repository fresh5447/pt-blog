const Article = require('../../models/article');

exports.getAll = (req, res) => {
  Article.find((err, data) => {
    if (err) return res.send(err, 'Error finding all Articles');
    res.json({message: 'Found Articles', data});
  });
};

exports.getOne = (req, res) => {
  Article.findById(req.params.article_id, (err, data) => {
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
  });

  newArticle.save((err, data) => {
    if (err) return res.send(err);
    res.json({message: 'Article Created', data});
  });
};

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
