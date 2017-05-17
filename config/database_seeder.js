const Article = require('../models/article');
const faker = require('faker')
module.exports = () => {
  Article.remove(err => {
    if (err) {
      console.log(err)
    } else {
      console.log("DESTROYED ALL ARTICLES, ABOUT TO SEED")
    }
  });
  for (var i = 0; i < 20; i++) {
    let newArticle = new Article({
      title: faker.lorem.words(),
      content: faker.lorem.paragraphs()
    })
    newArticle.save()
  }
  console.log("CREATED 20  NEW ARTICLES")
}
