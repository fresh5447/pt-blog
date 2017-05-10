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
