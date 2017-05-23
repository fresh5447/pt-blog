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



#### Faker section
We are going to store an `env` variable whicl will decide if we should seed our
database our not.

In the root of your node folder make a file called `.env`, and make sure to add this file to your `gitignore`

Add this to `.env`

`SEED_DATABASE=true`

We are going to use an npm called dotenv -> which will look at this file to interpret the variables.

in the root of Node:
`npm install --save dotenv`

Then at the very top of your `app.js` add `require('dotenv').config();`

Let's test if it is working. In `app.js`, just below all your other imports add this line:

```
if(process.env.SEED_DATABASE==='true') {
  console.log("About to seed the database")
}
```

Run your node server and you should see the console.log; Stop your server, update the .env var to be false, and you will no longer see the console.log.

Why did we do this? We are going to write our script that will empty our datbase and create new data. It would be overkill to do this every single time our node app fires up, so we will just set SEED_DATABASE to true, whenever we want to start with a fresh database.

In `config/` make a file called `database_seeder.js` To start have it export a console.log. Now in `app.js` instead of a console.log; import and execute the newly created script.

```
// config/database_seeder.js
module.exports = () => {
  console.log("found the database seeder")
}
```

And in App.js ->
```
if(process.env.SEED_DATABASE==='true') {
  require('./config/database_seeder')();
}
```

Now all we need to do is use Faker.js to make fake data and save it to our codebase.
https://github.com/Marak/faker.js


## Phase Three Solution

1) Create Model Comment with field content
2) Add Comment relationship to Post
3) Implement API endpoint to create comment on Post.
