const db = require("../models/db");
const Order = require("../models/OrderModel")
const User = require("../models/UserModel")

const adminOrderController = {
	adminOrder: function(req,res){
		db.findMany(Order, null, null, function(orders) {
			var x = orders
			
			// get user from each order
			for(var i = 0; i < x.length; i++) {
				orderId = x[i]._id
			}

			db.findMany(User, null, null, function(results) {
				for(var i = 0; i < x.length; i++) {
					for(var j = 0; j < results.length; j++) {
						if(results[j].orders.includes(x[i]._id)) {
							x[i].name = results[j].firstname + " " + results[j].lastname
						}
					}
				}
				res.render('admin-order-page', {orders: orders});
			})
		})
	},

	changeStatus: function(req,res) {
		var id = req.body.id
		var status = req.body.status

		db.updateOne(Order,
			{_id: id},
			{status: status})
	}
}

module.exports = adminOrderController;