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
	},

	addProduct: function(req,res){

		var name = req.body.name;
		var description = req.body.description;
		var color = req.body.color;
		var pictures = null;
		var date = new Date();
		var postingdate = date.getTime();
		var price = req.body.price;
		var category = req.body.category;
		var variation = req.body.variation;
		var quantity = req.body.quantity;

		var fullproduct = {
			name: name,
			description: description,
			color: color,
			pictures: pictures,
			postingdate: postingdate,
			price: price,
			category: category,
			variation: variation,
			quantity: quantity
		}
		console.log(fullproduct)
		db.insertOne(Product, fullproduct, function(){
		})

		
		res.redirect('/adminProduct')
	},
	
	deleteProduct: function(req,res){
		var productId = req.query.id
		db.deleteOne(Product, {_id:productId})
	}
}

module.exports = adminProductController;