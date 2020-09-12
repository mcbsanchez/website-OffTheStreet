const db = require('../models/db.js');
const Product = require('../models/ProductModel.js')

const homeController = {
	home: function(req,res){
		var projection = 'name price'

		db.findMany(Product, null, projection, function(results) {
			console.log(results)
			if(results != null) {
				res.render('home', {products: results})
			}
		})

		// res.render('home');
	}
}

module.exports = homeController;