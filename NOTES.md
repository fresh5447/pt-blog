### Phase One Notes

#### Basic Setup

Bootstrap the backend using [Express Generator](https://expressjs.com/en/starter/generator.html)

1) `sudo npm install express-generator -g`
  - only need to install globally once
  - To use -> `express nameOfApp`
2) `express blog`

----
WE ARE GOING TO COMMIT OFTEN
----
Let's make sure we ignore `node_modules`

`echo 'node_modules/' >> .gitignore`

Delete any unnecessary things the generator created
  - ie Views folder and any view engine middleware
  - public directory

Add a test endpoint to app.js,
```
app.get('/test', function(req,res){
  res.json({message: "App functioning properly"})
});
```

update server in bin/www to use port 3001:
`var port = normalizePort(process.env.PORT || '3001');`

Take the app for a spin, and test your endpoint using PostMan

If the app is functional - commit your code

Configure MongoDB
  - Install any dependencies
    - IE Mongo & Mongoose
  - Create DB connection code in it's own file: `config/database-connection`
  ```
  var mongoose = require('mongoose');

  module.exports = () => {
    mongoose.connect("mongodb://localhost/pt-blog");
    console.log("📁 📂 🗄 DATABASE OPERATIONAL 🗄 📂 📁")
  }

```
Then import this code into `app.js` and call the function
`require('./config/database-connection')();`
  - Commit code

#### Begin API Phase

  - Checkout to a safe branch
  - `git checkout -b articles`
  - Create article Model
  - Create routes folder, and `routes/articles.js`
  - Create Endpoints in `routes/articles` ONE AT A TIME, and continually test using PostMan
  - Once you are satisfied all CRUD routes work
  - `git add -A`
  - `git commit -m 'some msg'`
  - `git push origin articles` -> Note you pushed to your new branch
  - `git checkout master`
  - `git merge articles` -> brings your new code into articles
  - `git push origin master` -> sync your master branch with new code


  Once CRUD routes are implemented, refactor to use the `index` export method,
  it should look like this:
  ```
  const express = require('express');
  const ArticleRoutes = require('./articles/routes')

  /* GET test route. */
  module.exports = (app) => {
    app.get('/api/articles', ArticleRoutes.getAll);
    app.post('/api/articles', ArticleRoutes.createOne);
    app.get('/api/articles/:article_id', ArticleRoutes.getOne);
    app.delete('/api/articles/:article_id', ArticleRoutes.removeOne);
    app.put('/api/articles/:article_id', ArticleRoutes.editOne);
  };
```

Testing:
Use Mocha, Chai, & chai-http to run your test suite. In order to have a seperate DB for testing purposed, add this script to your `package.json`
`    "test": "NODE_ENV=test mocha --no-deprecation --sort --colors --inline-diffs --bail"
`

Then in your database config file, create a database based on your NODE_ENV, like so:

```
var mongoose = require('mongoose');

module.exports = () => {
  if (process.env.NODE_ENV === 'test' ) {
    mongoose.connect("mongodb://localhost/test-pt-blog");
    console.log("📁 📂 🗄 TEST DATABASE OPERATIONAL 🗄 📂 📁");
  } else {
    mongoose.connect("mongodb://localhost/pt-blog")
    console.log("📁 📂 🗄 DEV DATABASE OPERATIONAL 🗄 📂 📁");
  }

}
```

#### Phase Two:

We are going to use 'custom-react-scripts' to bootstrap our React app (in the past we have used create-react-app), this will give us a bit more control over our configuration

[custom-react-scripts](https://www.npmjs.com/package/react-scripts-custom)

`npm install -g create-react-app`

Then we will cut out the extra stuff, and reconfigure the directory to our liking


Install React-router -  
`npm install --save react-router@3`




Blog Post Components

ArticleList
  ArticleCard

PostArticle

EditArticle

ViewArticle
