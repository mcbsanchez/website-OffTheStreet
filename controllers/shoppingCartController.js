const db = require("../models/db");
const ProductModel = require("../models/ProductModel")
const ProductOrdersModel = require("../models/ProductOrdersModel");
const UserModel = require("../models/UserModel");

const shoppingCartController = {
	shoppingCart: function(req,res){
		res.render('shopping-cart');
	},

	addToCart: function(req,res) {
		// var userId = req.session.passport.user;

		var userId = '5f5bbeb79751353c98ee8463';
		var productId = '5f5bbeb79751353c98ee8461';

		var newProduct = {
			product: productId,
			quantity: 1
		}
		
		db.insertOne(ProductOrdersModel, newProduct, function(){});

		db.findOne(ProductOrdersModel, {product: productId}, function(res) {
			db.updateOne(UserModel,
				{_id:userId},
				{$push: {cart: res._id}},
				{"$upsert": true},
				function(err,result) {
					if(err) throw err
					else {
						console.log("success")
					}
				})
		})
	},

	removeItem: function(req,res) {
		var userId = "5f5bbeb79751353c98ee8463";
		var productId = "";

		UserModel.updateOne(
			{_id: userId}, 
			{$pull: {cart: productId}}
		)
	}
}

module.exports = shoppingCartController;