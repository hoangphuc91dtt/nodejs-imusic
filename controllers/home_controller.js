var User = require("../models/user");
const Song_music = require("../models/uploadaudio.js");
var jwt = require("jsonwebtoken");

async function index(req, res, next) {
    const song_musics = await Song_music.find({});
    res.render("index", { title: "Musicyar", song_musics });
}
async function test(req, res, next) {
    res.send("index");
}

async function login(req, res, next) {
    var username = req.body.username;
    var pass = req.body.password;
    console.log("ACC:", username, pass);
    var accounts = await User.findOne({
        username: username,
        password: pass,
    })
        .then((data) => {
            if (data) {
                console.log("chaune", String(data._id));
                var token = jwt.sign({ _id: data._id }, "mk");
                return res.json({
                    message: "thanh cong",
                    token: token,
                    id: data.id,
                    username: data.username,
                });
            } else {
                return res.json("that baii");
            }
        })
        .catch((err) => {
            res.status(500).json("Loi server");
        });
}

module.exports = {
    index,
    login,
    test,
};
