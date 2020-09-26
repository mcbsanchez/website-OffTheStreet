const db = require('../models/db.js');
const Product = require('../models/ProductModel.js')

const adminProductController = {
	adminProduct: function(req,res){
		db.findMany(Product, null, null, function(results) {
			products = results;
			for(var i=0 ; i<results.length ; i++){
				products[i].number = i+1;
			}
			if(results != null) {
				res.render('admin-product-page', {products: products})
			}
		})
	}
}

module.exports = adminProductController;