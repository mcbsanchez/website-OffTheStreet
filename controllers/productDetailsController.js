const db = require('../models/db.js');
const Product = require('../models/ProductModel.js')
const ProductOrdersModel = require('../models/ProductOrdersModel.js')
const ProductVariation = require('../models/ProductVariationModel.js')

const productDetailsController = {
	productDetails: function(req,res){
		// res.render('product-details');

		var productId = req.query.id;
		console.log(productId);
		var query = {_id: productId};
		var projection = 'name description color price variations';
		
		// res.render('product-details', result);

		db.findOne(Product, query , projection, function(result) {
			db.findMany(ProductVariation,  {_id: { $in: result.variations }}, null, function(variations){
				var vars = [];
				for(var i=0; i<variations.length ; i++){
					if(variations[i].quantity>0)
						vars.push(variations[i].size)
				}
				console.log(vars)
				var product = {
					pictures: result.pictures,
					variations: vars,
					name: result.name,
					description: result.description,
					color: result.color,
					price: result.price,
				}
				if(result != null){
					res.render('product-details', product);
				}
			} )
		});
	}
}

module.exports = productDetailsController;