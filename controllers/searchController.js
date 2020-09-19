const db = require('../models/db.js');
const Product = require('../models/ProductModel.js')

const searchController = {
	search: function(req,res){
		var input = req.query.searchInput
		var query = {name: {$regex: input, "$options": "i"}}

		db.findMany(Product, query, null, function(result) {
			res.render('search', {products: result})
		})
	}
}

module.exports = searchController;