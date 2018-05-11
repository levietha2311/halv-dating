var fs = require('fs');
var path = require('path');
var userDao = require('../dao/user.dao');
var jwt = require('../utils/jwt');
var crypto = require('../utils/crypto');

module.exports = {
    register: register,
    login: login
}

async function register(reqUser) {
    try {
        var errors = validateUserModel(reqUser);
        if (errors.length > 0) {
            throw errors;
        }
        var user = await userDao.findOne({ username: reqUser.username });
        if (user) {
            throw { message: "username is exist!" };
        } else {
            reqUser.salt = crypto.genSalt();
            var hash = await crypto.hashWithSalt(reqUser.password, reqUser.salt);
            reqUser.password = hash;
            user = await userDao.create(reqUser);
            return user;
        }
    } catch (err) {
        throw err;
    }
}

async function login(reqBody) {
    try {
        var errors = validateUserModel(reqBody);
        if (errors.length > 0) {
            throw errors;
        }
        var user = await userDao.findOne({ username: reqBody.username });
        if (!user) {
            throw { message: "Username or password wrong" };
        }
        var hash = await crypto.hashWithSalt(reqBody.password, user.salt);
        if (hash == user.password) {
            console.log(typeof user);
            const token = await jwt.sign(user.toObject());
            return token;
        } else {
            throw { message: "Username or password wrong" };
        }
    } catch (err) {
        throw err;
    }
}

// function register(req, res, next) {
//     var userModel = req.body;
//     // kiem tra du lieu nguoi dung
//     var errors = validateUserModel(userModel);
//     if (errors.length > 0) {
//         return next({ statusCode: 400, message: errors });
//     }
//     userDao.findOne({ username: userModel.username })
//         .then(function (user) {
//             if (user) {
//                 next("username is exist!");
//             } else {
//                 userModel.salt = crypto.genSalt();
//                 return crypto.hashWithSaltAsync(userModel.password, userModel.salt)
//                     .then(function (hash) {
//                         userModel.password = hash;
//                         return userDao.create(userModel)
//                             .then(function (user) {
//                                 console.log(user);
//                                 res.send(user);
//                             });
//                     })
//             }
//         }).catch(function (err) {
//             next(err);
//         })
// }


// function login(req, res, next) {
//     var userModel = req.body;
//     var userindb = {};
//     var errors = validateUserModel(userModel);
//     if (errors.length > 0) {
//         return next(errors);
//     }
//     userDao.findOne({ username: userModel.username }, '')
//         .then(function (user) {
//             userindb = user;
//             return crypto.hashWithSalt(userModel.password, user.salt)

//         })
//         .then(function (hash) {
//             if (hash == userindb.password) {
//                 jwt.sign(userindb, function (err, token) {
//                     if (err) {
//                         next(err);
//                     } else {
//                         res.send(token);
//                     }
//                 });
//             } else {
//                 next("username or password wrong");
//             }
//         })
//         .catch(function (err) {
//             next("username or password wrong");
//         })
// }

function validateUserModel(userModel) {
    var errors = [];
    if (!userModel.username) {
        errors.push("username is required!");
    }
    if (!userModel.password) {
        errors.push("password is required!");
    }
    return errors;
}