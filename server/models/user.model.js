var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    nickname: {
        type: String,
        required: false,
    },
    password: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    avatarUrl: {
        type: String,
        required: false,
    },
    birthday: {
        type: Date,
        required: false
    },
    about: {
        type: String,
        required: false
    },
    salt: {
        type: String,
        required: false
    },
    location: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: false
    }
});
// chong trung username
// userSchema.index({username: true}, {unique: true});

var User = mongoose.model('users', userSchema);

module.exports = User;