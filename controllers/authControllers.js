const model = require("../database/models/");
const bcrypt = require ("bcryptjs");
const jwt = require ("jsonwebtoken");
require("dotenv").config();

function login(req, res) {   
    const email = req.body.email;
    const password =  req.body.password;

    model.User.findOne({
        where: {
            email: email,
        },
    }).then(function(result) {
        let passwordHash = result.password;
        let checkPassword = bcrypt.compareSync(password, passwordHash);

        if (checkPassword) {
            res.json({
            message: "Berhasil Login",
            token: jwt.sign({id:result.id}, process.env.JWT_KEY_SECRET,{
                expiresIn:"1h"
            }),
          });
        } else {
            res.json({
                message:"Gagal Login"
            });
        }
    }).catch(function(error) {
        res.json({error:error})
    });
}
 
function register (req, res){
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const role = req.body.role;

    model.User.findOne({
        where: {
            email:email
        }
    }).then(function(result) {
        if (result) {
            res.json({
                message:"User already exists. Registration failed"
            });
        } else {
            const hashedPassword = bcrypt.hashSync(password,10);

            model.User.create({
                name: name,
                email: email,
                password: hashedPassword,
                role:role, 
            }).then(function (newUser) {
                res.json({
                    message: "  Register succesful",
                    token: jwt.sign({id:newUser.id}, process.env.JWT_SECRET_KEY,{
                        expiresIn:'1h'
                    }),
                    data: {
                        id:newUser.id,
                        name:newUser.name,
                        email:newUser.email,
                        role:newUser.role,
                    }
                });
            }).catch(function(error) {
                res.json({error:error});
            });
        }
    }).catch(function(error) {
        res.json({error:error});
    });
}

function logout(req,res){
    res.json({
        message:" Logout Sukses",
    });
}

module.exports={
    login, register, logout
}