const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const usersController = require('../controller/user.controller');
const authController = require('../controller/auth.controller');
const jwt = require('../utils/jwt');

router.get('', getUsers);
router.post('/login', login);
router.post('/register', register);
router.post('/updatename', updateName);
router.post('/updatenickname',updateNickName);
router.post('/updategender',updateGender);
router.post('/updatepassword',updatePassword);
router.post('/updateabout',updateAbout);
router.post('/updatedbay',updateBDay);
router.post('/getbday',getBday);
const sendError = (err, res) => {
    response.status = 501;
    response.message = typeof err == 'object' ? err.message : err;
    res.status(501).json(response);
};

let response = {
    status: 200,
    data: [],
    message: null
};

function getUsers(req, res, next) {
    var name = req.body.name;
    usersController.getUsers(name)
        .then(function (data) {
            res.send(data);
            console.log()
        })
        .catch(function (err) {
            res.status(500).send(err);
        })
}

function login(req, res, next) {
    var reqBody = req.body;
    authController.login(reqBody)
    .then(function(data){
        res.send(data);
    })
    .catch(function(err){
        res.status(400).send(err);
    })
}

function register(req, res, next) {
    var reqUser = req.body;
    authController.register(reqUser)
    .then(function(data){
        res.send(data);
    })
    .catch(function(err){
        res.send(err);
    })
}

function updateName(req, res, next) {
    var username = req.body.username;
    var name = req.body.name;
    usersController.updateName(username,name)
    .then(function(data){
        res.send(data);
    })
    .catch(function(err){
        res.send(err);
    })
}

function updateNickName(req,res,next){
    var username = req.body.username;
    var nickname = req.body.nickname;
    usersController.updateNickName(username,nickname)
    .then(function(data){
        res.send(data);
    })
    .catch(function(err){
        res.send(err);
    })
}

function updateGender(req,res,next){
    var username = req.body.username;
    var gender = req.body.gender;
    usersController.updateGender(username,gender)
    .then(function(data){
        res.send(data);
    })
    .catch(function(err){
        res.send(err);
    })
}

function updatePassword(req,res,next){
    var username = req.body.username;
    var password = req.body.password;
    usersController.updatePassword(username,password)
    .then(function(data){
        res.send(data);
    })
    .catch(function(err){
        res.send(err);
    })
}

function updateAbout(req,res,next){
    var username = req.body.username;
    var about = req.body.about;
    usersController.updateAbout(username,about)
    .then(function(data){
        res.send(data);
    })
    .catch(function(err){
        res.send(err);
    })
}

function updateBDay(req,res,next){
    var username = req.body.username;
    var bday = req.body.bday;
    console.log(bday);
    usersController.updateBDay(username,bday)
    .then(function(data){
        res.send(data);
    })
    .catch(function(err){
        res.send(err);
    })
}

function getBday(req,res,next){
    var username = req.body.username;
    usersController.getUser(username)
    .then(function(data){
        res.send(data.birthday);
    })
    .catch(function(err){
        res.send(err);
    })
}

module.exports = router;