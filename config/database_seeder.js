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


//
// 
// const Article = require('../models/article');
// const Comment = require('../models/comment');
// const faker = require('faker')
// module.exports = () => {
//   console.log("ABOUT TO DO SOME DB SEEDER STUFF")
//   Article.remove(err => {
//     if (err) {
//       console.log(err)
//     } else {
//       console.log("DESTROYED ALL ARTICLES, ABOUT TO SEED")
//     }
//   });
//   for (var i = 0; i < 20; i++) {
//     let newArticle = new Article({
//       title: faker.lorem.words(),
//       content: faker.lorem.paragraphs()
//     })
//     for (var i = 0; i < 3; i++) {
//       let newComment = new Comment({
//         message: faker.lorem.words()
//       })
//       newComment.save((err,com) => {
//         if(err) console.error(err)
//         newArticle.comments.push(com._id)
//       })
//     }
//     newArticle.save((err) => {
//       if(err){
//         console.error(err)
//       } else {
//         console.log("CREATED 20  NEW ARTICLES WITH COMMENTS")
//       }
//
//     })
//
//   }
//
// }
//
