const nodemailer = require('nodemailer');

const db = require("../models/db");
const ProductModel = require("../models/ProductModel")
const ProductOrdersModel = require("../models/ProductOrdersModel");
const UserModel = require("../models/UserModel");
const Address = require("../models/AddressModel");
const Order = require("../models/OrderModel");

var transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: 'offthestreetbusiness@gmail.com',
		pass:'otsb.098'
	}
});

const checkoutController = {
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

		var id = "5f5cafd29b5a4d5e90534dfa";

		db.findMany(ProductOrdersModel, {user: id}, null, function(results){
			var addressId;
			var numItems = 0;
			var status = "pending";
			var date = new Date();
			var dateordered = date.getTime()
			var products = [];
			var productNamesQ = [];
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

				var quantity = []
				var productids = []
				for(var i=0; i<results.length ; i++){
					numItems += results[i].quantity
					products.push(results[i].product)
					quantity.push(results[i].quantity)
				}	
				
				db.findMany(ProductModel, {_id: { $in: products }}, null, function(productsres){
					var total = 0;
					
					for(var i=0; i< productsres.length ; i++) {
						total += productsres[i].price * quantity[i]
						productNamesQ.push(productsres[i].name + ": " + quantity[i] + " pcs\n")
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
					
					db.insertOne(Order, order, function(result){
						db.updateOne(UserModel,
							{_id:id},
							{$push: {orders: result._id}})
						//check for session
						//find one here
						//get the points
						//computer for points to be added
						//add the point to the current points
						//update
						db.deleteMany(ProductOrdersModel, {user: id})
						var toEmail = "offthestreetbusiness@gmail.com";
						var message = "Name: " + firstname + " " + lastname + "\n";
						message = message.concat("Email: " + email + "\n");
						message = message.concat("Phone Number: " + phonenumber + "\n");
						message = message.concat("Number of items: " + numItems + "\n");
						message = message.concat("Products: " + "\n");
						message = message.concat(productNamesQ);
						message = message.concat("Mode of Payment: " + modeofpayment + "\n");
						message = message.concat("Mode of Delivery: " + modeofdelivery + "\n");
						message = message.concat("Postal Code: " + postalcode + "\n");
						message = message.concat("Province: " + province + "\n");
						message = message.concat("City: " + city + "\n");
						message = message.concat("Barangay: " + barangay + "\n");
						message = message.concat("Address Line: " + street + "\n");
						message = message.concat("Total: " + total + "\n");
						message = message.concat("Time Ordered: " + dateordered + "\n");

						var values = {
							numitems: numItems,
							products: productNamesQ,
							modeofdelivery: modeofdelivery,
							modeofpayment: modeofpayment,
							total: total
						}
						res.render('confirmation', values)
						var mailOptions = {
							from: 'offthestreetbusiness@gmail.com',
							to: toEmail,
							subject:'Off The Street | Order from: ' + email,
							text: message
						};
						transporter.sendMail(mailOptions, function(error, info) {
							if(error) {
								res.send(false);
							}
							else {
								res.send(true);
							}
						});
						
					})
				})				
			})
		})
    }
}

module.exports = checkoutController;