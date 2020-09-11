const db = require('../models/db.js');
const Product = require('../models/ProductModel.js')
const ProductOrdersModel = require('../models/ProductOrdersModel.js')

const productDetailsController = {
	productDetails: function(req,res){
		// res.render('product-details');

		var productId = req.query.id;
		console.log(productId);
		var query = {_id: productId};
		var projection = 'name description color price variations';
		
		// res.render('product-details', result);

		db.findOne(Product, null , projection, function(result) {
			console.log(result)
			console.log(query)
			if(result != null){
				res.render('product-details', result);
			}
		});
	}
}

module.exports = productDetailsController;