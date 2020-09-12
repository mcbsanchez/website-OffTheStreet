const db = require("../models/db");
const ProductModel = require("../models/ProductModel")
const ProductOrdersModel = require("../models/ProductOrdersModel");
const UserModel = require("../models/UserModel");
const ProductVariationModel = require("../models/ProductVariationModel");

const shoppingCartController = {
	
	shoppingCart: function(req,res){
		var userId = '5f5cafd29b5a4d5e90534dfa';
		db.findMany(ProductOrdersModel, {user: userId}, null, function(result){
			var ids = [];
			var quantity = [];
			for (var i = 0 ; i<result.length ; i++){
				ids.push(result[i].product);
				quantity.push(result[i].quantity);
			}
			db.findMany(ProductModel, {_id: { $in: ids }}, null, function(results){
				var x = []
				for(var i = 0; i < results.length ; i++){
					var y = {
						name: results[i].name,
						_id: result[i]._id,
						quantity: quantity[i],
						price: results[i].price
					}
					console.log(y)
					x.push(y)
				}
				console.log(x)
				res.render('shopping-cart', {products: x});
			})
		})
	},

	addToCart: function(req,res) {
		// var userId = req.session.passport.user;

		var userId = '5f5cafd29b5a4d5e90534dfa';
		var productId = '5f5caedfa2b57c256cb4889e';

		var newProduct = {
			product: productId,
			user: userId,
			quantity: 1
		}
		
		db.insertOne(ProductOrdersModel, newProduct, function(){});

		db.findOne(ProductOrdersModel, ({product: productId}, {user: userId}), null, function(res) {
			console.log('hello')
			db.updateOne(UserModel,
				{_id:userId},
				{$push: {cart: res._id}})
			
		})
	},

	postDetails: function(req,res) {
		var payment = req.body.payment
		var delivery = req.body.delivery
		
		var details = {
			modeofpayment: payment,
			modeofdelivery: delivery
		}

		res.render('shipping-details', details)
	},

	removeItem: function(req,res) {
		var userId = "5f5cafd29b5a4d5e90534dfa";
		var productId = "5f5caedfa2b57c256cb4889e";

		UserModel.updateOne(
			{_id: userId}, 
			{$pull: {cart: productId}}
		)
	}
}

module.exports = shoppingCartController;