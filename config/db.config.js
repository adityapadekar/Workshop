const mongoose = require("mongoose");

module.exports.connectDB = (url) => {
  return mongoose.connect(url);
};
