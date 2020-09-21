const db = require("../models/db");
const Order = require("../models/OrderModel")
const User = require("../models/UserModel")

const adminOrderController = {
	adminOrder: function(req,res){
		db.findMany(Order, null, null, function(orders) {

			// get user from each order for 'ordered by'

			// status column displays pending even if the status is not pending

			res.render('admin-order-page', {orders: orders});
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