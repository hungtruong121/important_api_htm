const ProductSchema = require('../models/products');
const MenuSchema = require('../models/menu');
const dishFunc = require('../middleware/dish');
const DishSchema = require('../models/dishes');
// @desc    API get material food following price [method:GET]
// @route   /api/foods/?type=?&price=?

exports.getFoods = async (req, res, next) => {
    const {
        type,
        price
    } = req.query;
    try {
        let foods;
        if (!price && type) {
            foods = await ProductSchema.find({
                type: type
            });
        }
        if (price && type) {
            foods = await ProductSchema.find({
                type: type,
                price: {
                    $lte: price
                }
            });
        }
        if (!price && !type) {
            res.status(200).json({
                success: false
            });
        }
        res.status(200).json({
            success: true,
            data: foods
        });
    } catch (error) {

    }
};

// @desc    API get menu food
// @route   /api/foods/menu

exports.getFoodsMenu = async (req, res, next) => {
    try {
        const menu = await MenuSchema.find();
        res.status(200).json({
            success: true,
            data: menu
        });
    } catch (error) {

    }
};

// @desc    API get food of a menu
// @route   /api/foods/menu/:key

exports.getDishesinMenu = async (req, res, next) => {
    try {
        const {
            key
        } = req.params;
        const dishes = await DishSchema.find({
            menu: key
        });
        res.status(200).json({
            success: true,
            data: dishes
        });
    } catch (error) {

    }
};

// @desc    API get menu special food
// route    /api/foods/special/menu/:type

exports.getSpecialMenu = async (req, res, next) => {
    try {
        const {type} = req.params;
        const specialMenu = await MenuSchema.find({
            isSpecial: true,
            kindOf: type
        });
        res.status(200).json({
            success: true,
            data: specialMenu
        });
    } catch (error) {

    }
};

// @desc    API get food for going to market
// route    /api/foods/market

exports.getFoodsMarket = async (req, res, next) => {
    try {
        const foods = await ProductSchema.find();
        res.status(200).json({
            success: true,
            data: foods,
        });
    } catch (error) {

    }
};

// @desc API return a menu with material food choosen
// /api/foods/ingredient/?select=?,?

exports.getHintMenu = async (req, res, next) => {
    try {
        const ids = req.query.select.split(',');
        const foods = await ProductSchema.find({
            $or: [{
                _id: ids
            }]
        });
        const dishes = await DishSchema.find();
        const keyMenu = dishFunc(foods, dishes);
        const menusHint = await MenuSchema.find({
            $or: [{
                key: keyMenu
            }]
        });
        res.status(200).json({
            success: true,
            data: menusHint
        });
    } catch (error) {

    }
};
