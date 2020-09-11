const db = require('../models/db');
const Product = require('../models/ProductModel')

const productDetailsController = {
	productDetails: function(req,res){
		// res.render('product-details');

		var productId = req.params.id;
		var query = {_id: productId};
		var projection = 'name description color price variations';

		db.findOne(Product, query, projection, function(result) {
		    res.render('product-details', {products: result});
		});
	}
}

module.exports = productDetailsController;