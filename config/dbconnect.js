const { default: mongoose } = require("mongoose");

const dbconnect = () => {
  try {
    const conn = mongoose.connect(process.env.MONGODB_URI);
    console.log("connected to the db");
  } catch (error) {
    console.error("not connected to the database", error);
  }
};
module.exports = dbconnect;
