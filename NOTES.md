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
