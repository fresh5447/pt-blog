var mongoose = require('mongoose');

module.exports = () => {
  mongoose.connect("mongodb://localhost/pt-blog");
  console.log("📁 📂 🗄 DATABASE OPERATIONAL 🗄 📂 📁")
}
