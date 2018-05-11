var jwt = require('jsonwebtoken');
var fs = require('fs');

var cert = fs.readFileSync(__dirname + '/key/key.pem');
var pub = fs.readFileSync(__dirname + '/key/key.pub');

exports.sign = function (obj) {
    return new Promise((resolve, reject) => {
        return jwt.sign(obj, cert, {
            algorithm: 'RS256'
        }, function (err, token) {
            if(err) {
                return reject(err);
            }
            return resolve(token);
        });
    })
}

exports.verify = function (token, callback) {
    jwt.verify(token, pub, function (err, decoded) {
        callback(err, decoded);
    });
};