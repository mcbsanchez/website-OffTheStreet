const UserModel = require("../models/UserModel");

const shoppingCartController = {
	shoppingCart: function(req,res){
		res.render('shopping-cart');
	},

	addToCart: function(req,res) {
		// var userId = req.session.passport.user;
		// var productId = req.params.id;

		var userId = '5f5b0fece1ea7fbc58571836';
		var productId = '5f5b0b5be1ea7fbc58571835';

		var newProduct = {
			product: productId,
			quantity: 1
		}

		UserModel.updateOne(
			{_id: userId},
			{$push: {cart: newProduct}},
			{"$upsert": true},
			function(err, res) {
				if(err) throw err
				else {
					console.log("successful")
					// res.send("Successfully added")
				}
			}
		)
	},

	removeItem: function(req,res) {
		var userId = "5f5b0fece1ea7fbc58571836";
		var productId = req.params.id;
		var string = '"' + productId + '"';

		UserModel.updateOne(
			{_id: userId}, 
			{$pull: {cart: string}}
		)
	}
}

module.exports = shoppingCartController;