var Audio = require("../models/uploadaudio");
const multer = require("multer");
var Storage = multer.diskStorage({
  destination: "public/uploads",
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
var upload = multer({
  storage: Storage,
}).single("testAudio");
// function index
async function index(req, res, next) {
  res.render("canhan");
}
// function up audio
async function uploadfile(req, res, next) {
  upload(req, res, (err) => {
    if (err) {
      console.log("aaa");
      console.log("loi kia", err);
    } else {
      const newAudio = new Audio({
        name: req.file.originalname,
        desc: req.body.desc,
        musicdata: {
          data: req.file.filename,
          contentType: "audio/mp3",
        },
      });
      newAudio
        .save()
        .then(() => {
          console.log(req.file.originalname);
          res.send("successfully uploaded ");
        })
        .catch((err) => {
          console.log("alllo");
          console.log("loikia", err);
        });
    }
  });
}

module.exports = {
  index,
  uploadfile,
};
