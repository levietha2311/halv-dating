var fs = require('fs');
var path = require('path');
var userDao = require('./../dao/user.dao');
var User = require('../models/user.model');
var crypto = require('../utils/crypto');

module.exports = {
    getUsers: getUsers,
    getUser: getUser,
    // uploadAvatar: uploadAvatar
    updateName: updateName,
    updateNickName: updateNickName,
    updateGender: updateGender,
    updatePassword: updatePassword,
    updateAbout: updateAbout,
    updateBDay: updateBDay
}

async function getUsers() {
    try {
        var users = await userDao.findAll();
        if (!users) {
            throw {
                message: 'Not Found'
            }
        }
        return users;
    } catch (err) {
        return err.message
    }
}

async function getUser(username) {
    try {
        var user = await userDao.findOne({ username: username });
        console.log(user)
        if (!user) {
            throw {
                message: 'Not Found'
            }
        }
        return user;
    } catch (err) {
        throw err.message
    }
}

async function updateName(username, name) {
    try {
        console.log(name);
        var user = await userDao.updateByCondition({ username: username }, { $set: { name: name } });
        if (!user) {
            throw {
                message: 'Not Found'
            }
        }
        return userDao.findOne({ username: username });
    } catch (err) {
        return err.message
    }
}

async function updateNickName(username, nickname) {
    try {
        var user = await userDao.updateByCondition({ username: username }, { nickname: nickname })
        if (!user) {
            throw {
                message: 'NotFound'
            }
        }
        return userDao.findOne({ username: username });
    } catch (err) {
        return err.message
    }
}

async function updateGender(username, gender) {
    try {
        var user = await userDao.updateByCondition({ username: username }, { gender: gender })
        if (!user) {
            throw {
                message: 'NotFound'
            }
        }
        return userDao.findOne({ username: username });
    } catch (err) {
        return err.message
    }
}

async function updatePassword(username, password) {
    try {
        var user = await userDao.findOne({ username: username });
        if (!user) {
            throw {
                message: 'NotFound'
            }
        }
        var hash = await crypto.hashWithSalt(password, user.salt)
        await userDao.updateByCondition({ username: username }, { password: hash })
        return userDao.findOne({ username: username });
    } catch (err) {
        return err.message
    }
}

async function updateAbout(username, about){
    try{
        var user = await userDao.updateByCondition({username: username},{about: about})
        if(!user){
            throw{
                message: 'NotFound'
            }
        }
        return userDao.findOne({username: username});
    }catch(err){
        return err.message
    }
}

async function updateBDay(username,bday){
    try{
        var user = await userDao.updateByCondition({username: username},{birthday: bday})
        if(!user){
            throw{
                message: 'NotFound'
            }
        }
        return userDao.findOne({username: username});
    }catch(err){
        return err.message
    }
}
