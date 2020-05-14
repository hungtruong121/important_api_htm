const UserSchema = require('../models/user');
const StatisticSchema = require('../models/statistic');
const md5 = require('md5');
// desc     API register
// route    /api/user/register?username=&password=

exports.register = async (req, res, next) => {
    try {
        const {
            username,
            password
        } = req.query;
        if(!username || !password) return res.json({success: false});
        const user = await UserSchema.find({
            username: username
        });
        if (user.length != 0) {
            res.json({
                success: false
            });
        } else {
            const statistic = await StatisticSchema.create({
                protein: 0,
                lipid: 0,
                glucid: 0
            });
            await UserSchema.create({
                username: username,
                password: md5(password),
                name: username,
                id_statistic: statistic._id
            });
            res.status(201).json({
                success: true,
                message: 'Register successfully'
            });
        }
    } catch (error) {

    }

};

// desc     API for login
// route    /api/user/login?username=&password=

exports.login = async (req, res, next) => {
    try {
        const {username, password} = req.query;
        if(!username || !password) return res.json({success: false, message: 'Login failed'});
        const user = await UserSchema.find({username: username, password: md5(password)});
        if(user.length == 0){
            res.json({success: false, message: 'Login failed'});
        } else {
            res.status(200).json({success: true, message: 'Login successfully'});
        }
        
    } catch (error) {
        
    }
};