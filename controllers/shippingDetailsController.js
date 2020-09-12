const nodemailer = require('nodemailer');

const db = require("../models/db");
const ProductModel = require("../models/ProductModel")
const ProductOrdersModel = require("../models/ProductOrdersModel");
const UserModel = require("../models/UserModel");
const Address = require("../models/AddressModel");
const Order = require("../models/OrderModel");

const shippingDetailsController = {
	shippingDetails: function(req,res){
		res.render('shipping-details');
	},

	checkout: function(req, res){
		var modeofpayment = req.body.modeofpayment;
		var modeofdelivery = req.body.modeofdelivery;
		var firstname = req.body.firstname;
		var lastname = req.body.lastname;
		var email = req.body.email;
		var phonenumber = req.body.phonenumber;
		var postalcode = req.body.postalcode;
		var province = req.body.province;
		var city = req.body.city;
		var barangay = req.body.barangay;
		var street = req.body.street;

		var id = "5f5c82db6e08ad4f64787110";

		db.findMany(ProductOrdersModel, {user: id}, null, function(results){
			var addressId;
			var numItems;
			var total;
			var status = "pending";
			var date = new Date();
			var dateordered = date.getTime()
			var products = [];

			var address = {
				firstname: firstname,
				lastname: lastname,
				email: email,
				phonenum: phonenumber,
				postalcode: postalcode,
				province: province,
				city: city,
				barangay: barangay,
				addressline: street
			}

			db.insertOne(Address, address, function(result) {
				addressId = result._id
			})

			for (var i=0; i<results.length; i++) {
				numItems += results[i].quantity
				products.push(results[i].product)
				db.findOne(ProductModel, {_id: results[i].product}, null, function(product){
					total += product.price * results[i].quantity
				})
			}

			var order = {
				numitems: numItems,
				products: products,
				modepayment: modeofpayment,
				modedelivery: modeofdelivery,
				address: addressId,
				total: total,
				pointsused: 0,
				status: status,
				timeordered: dateordered,
				timecompleted: null,
				timecancelled: null,
				timeconfirmed: null
			}

			db.insertOne(Order, order, function(result){})

			res.render('home')
		})
		console.log(req.body.firstname);
	}
}

module.exports = shippingDetailsController;