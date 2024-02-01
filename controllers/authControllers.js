const model = require("../database/models/");
const bcrypt = require ("bcryptjs");
const jwt = require ("jsonwebtoken");
require("dotenv").config();

function login(req, res) {
    const email = req.body.email;
    const password =  re.body.password;
    model.User.findOne({
        where: {
            email: email,
        },
    })
    .then(function(result) {
        let passwordHash = result.password;
        let checkPassword = bcrypt.compareSync(password, passwordHash);

        if (checkPassword) {
            res.json({
            message: "Berhasil Login",
            token: jwt.sign({id:result.id}, process.env.JWT_SECRET_KEY,{
                expiresIn:"ih"
            }),
          });
        } else {
            res.json({
                message:"Gagal Login"
            });
        }
    })
}