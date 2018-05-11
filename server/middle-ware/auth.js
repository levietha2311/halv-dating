var jwt = require('./../utils/jwt');
var userDao = require('./../dao/user.dao');
var User = require('./../models/user.model');

exports.auth = function () {
    return function (req, res, next){
        var token =  req.headers['x-access-token'];
        if(token){
            jwt.verify(token,function(err, decodedData){
                if(err){
                    res.status(401);
                    res.json({message: 'Invalid Token'});
                }else{
                    var name = decodedData.name;
                    userDao.findOne({name: name})
                    .then(function(user){
                        req.user = user;
                        next();
                    })
                    .catch(function(err){
                        res.status(401);
                        res.send(err);
                    })
                }
            })
        }else{
            res.status(401);
            res.json({message: 'Not Authorized'})
        }
    }
}