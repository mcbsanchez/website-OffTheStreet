const db = require("../models/db");
const Order = require("../models/OrderModel")
const User = require("../models/UserModel")

const adminController = {
	admin: function(req,res){
		db.findMany(Order, {status: "Pending"}, null, function(orders) {
			var x = orders
			var num = [];
			for(var i = 1; i <= orders.length; i++)
				num.push(i)
			
			// get user from each order
			for(var i = 0; i < x.length; i++) {
				orderId = x[i]._id
			}

			db.findMany(User, null, null, function(results) {
				for(var i = 0; i < x.length; i++) {
					for(var j = 0; j < results.length; j++) {
						if(results[j].orders.includes(x[i]._id)) {
							x[i].name = results[j].firstname + " " + results[j].lastname
							x[i].quantity = num[i]
						}
					}
				}
				res.render('adminhome', {orders: x});
			})
		})
	}
}

module.exports = adminController;