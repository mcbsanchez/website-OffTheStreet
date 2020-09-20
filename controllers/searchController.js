const db = require('../models/db.js');
const Product = require('../models/ProductModel.js')

const searchController = {
	search: function(req,res){
		var input = req.query.searchInput
		var query = {name: {$regex: input, "$options": "i"}}

		db.findMany(Product, query, null, function(result) {
			res.render('search', {products: result})
		})
	},

	filter: function(req,res){
		var categories = req.body.categories
		var query = {category: {$in: categories}}
		
		db.findMany(Product, query, null, function(result) {

			// does not reflect in the webpage pero nakukuha yung output
			console.log(result)
			
			res.render('search', {products: result})
		})
	}
}

module.exports = searchController;