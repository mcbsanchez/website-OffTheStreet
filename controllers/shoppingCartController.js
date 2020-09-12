const db = require("../models/db");
const ProductModel = require("../models/ProductModel")
const ProductOrdersModel = require("../models/ProductOrdersModel");
const UserModel = require("../models/UserModel");
const ProductVariationModel = require("../models/ProductVariationModel");

const shoppingCartController = {
	shoppingCart: function(req,res){
		res.render('shopping-cart');
	},

	addToCart: function(req,res) {
		// var userId = req.session.passport.user;

		var userId = '5f5c82db6e08ad4f64787110';
		var productId = '5f5c82db6e08ad4f6478710b';

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
		var userId = "5f5bbeb79751353c98ee8463";
		var productId = "";

		UserModel.updateOne(
			{_id: userId}, 
			{$pull: {cart: productId}}
		)
	}
}

module.exports = shoppingCartController;