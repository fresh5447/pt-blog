var mongoose = require('mongoose');
require('dotenv').config()


module.exports = () => {
  if (process.env.NODE_ENV === 'test' ) {
    mongoose.connect("mongodb://localhost/test-pt-blog");
    console.log("📁 📂 🗄 TEST DATABASE OPERATIONAL 🗄 📂 📁");
  } else {
    mongoose.connect("mongodb://localhost/pt-blog")
    console.log("📁 📂 🗄 DEV DATABASE OPERATIONAL 🗄 📂 📁");
  }

}
