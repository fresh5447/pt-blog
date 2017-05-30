const Category = require('../../models/category');

exports.getAll = (req, res) => {
  Category.find((err, data) => {
    if (err) return res.send(err, 'Error finding all Categorys');
    res.json({message: 'Found Categorys', data});
  });
};

exports.getOne = (req, res) => {
  Category.findById(req.params.category_id)
  .populate('comments')
  .exec((err, data) => {
    if (err || !data) {
      res.json({err: err, message: 'No Data Found With That ID'});
    } else {
      res.json({message: 'Category Found', data});
    }
  });
};

exports.createOne = (req, res) => {
  const newCategory = new Category({
    name: req.body.name,
  });

  newCategory.save((err, data) => {
    if (err) return res.send(err);
    res.json({message: 'Category Created', data});
  });
};


exports.removeOne = (req, res) => {
  Category.remove({_id: req.params.category_id}, err => {
    if (err) {
      res.send(err);
    } else {
      res.json({message: 'Category Destroyed'});
    }
  });
};

exports.editOne = (req, res) => {
  Category.findById(req.params.category_id, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      data.name = req.body.name ? req.body.name : data.name;
      data.save((err, response) => {
        if (err) res.send(err);
        res.json(response);
      });
    }
  });
};
