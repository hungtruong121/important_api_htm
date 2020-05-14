const CartSchema = require('../models/Cart');


exports.CheckCart = async (req, res, next) => {

    const text = req.data
    console.log(text , "abc");
    CartSchema.create({name:data})
        // data.forEach(item => {
        //     // if(CartSchema.find(item)){
        //     //     print('test')
        //     // } else {
        //     //     
        //     // }

        // }
    // try {
    //     const {
    //         list
    //     } = req.query;
    //     if(!username || !password) return res.json({success: false});
    //     const user = await UserSchema.find({
    //         username: username
    //     });
    //     if (user.length != 0) {
    //         res.json({
    //             success: false
    //         });
    //     } else {
    //         const statistic = await StatisticSchema.create({
    //             protein: 0,
    //             lipid: 0,
    //             glucid: 0
    //         });
    //         await UserSchema.create({
    //             username: username,
    //             password: md5(password),
    //             name: username,
    //             id_statistic: statistic._id
    //         });
    //         res.status(201).json({
    //             success: true,
    //             message: 'Register successfully'
    //         });
    //     }
    // } catch (error) {

    // }

};
