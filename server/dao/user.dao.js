var User = require('../models/user.model');
const db = require('../config/db').dbConnect();



module.exports = {
    create: create,
    findById: findById,
    findOne: findOne,
    findAll: findAll,
    updateByCondition: updateByCondition,
    deleteById: deleteById
}

function create(model) {
    var user = new User(model);
    return user.save();
}

function findById(id) {
    {
        return User.findById(id);
    }
}

function findAll(condition,_skip,_limit,_projection,_sortBy, isDes ) {
    var _projection
    var where = condition ? condition : {};
    return User.find(condition);
}

function findOne(condition) {
    return User.findOne(condition);
}
function updateById(id, userModel) {
    return User.findByIdAndUpdate(id, userModel);
}
function updateByCondition(condition, userModel) {
    return User.findOneAndUpdate(condition, userModel);
}

function deleteById(id) {
    return User.findByIdAndRemove(id);
}
function count(condition) {
    if (condition) {
        return count(condition);
    }
    return User.count({});
}
