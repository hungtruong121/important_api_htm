const Dishes = require('../models/dishes');
// var mainin = Dishes.main_ingredient
// var choice = [];
// choice.push(cart);

// exports.findmeal = async (res, rep, next)=> {
//     var dishes = rep.body;
//   Dishes.insertMany(dishes, (docs) => {
//     console.log(books);
//     for(var i = 0; i <= choice.length; i++) {
//         if (choice[i]== mainin){
//             return dishes;
//         }
//     res.json(docs);
//   }
//     });
// }

var finddishs = function getAlldish(dishs , callback){
    getAllmeals(function(err, dishs){
        async.forEach(dishs, function(dish, callback) => {
            get
        });
    })
    var choice = [];

}