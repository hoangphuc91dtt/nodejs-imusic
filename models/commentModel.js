const mongoose = require("mongoose");

var Schema = mongoose.Schema;

var CommentSchema = new Schema({
  text: {
    type: String,
  },
  userId: {
    type: Number,
  },
  songId: {
    type: String,
    default: null,
  },
});

var CommentModel = mongoose.model("comment", CommentSchema);

module.exports = CommentModel;
