const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect(
      "mongodb+srv://chaudz:chauyeuai22@cluster0.l5kxahg.mongodb.net/imusic"
    );
    console.log("DB connected okiii!!");
  } catch (error) {
    console.log("DB connect fail !!");
  }
}

module.exports = { connect };
