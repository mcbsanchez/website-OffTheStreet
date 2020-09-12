const shippingDetailsController = {
	shippingDetails: function(req,res){
		res.render('shipping-details');
	},

	checkout: function(req, res){
		// var modeofpayment = req.body.modeofpayment;
		// var modeofdelivery = req.body.modeofdelivery;
		var firstname = req.body.firstname;
		var lastname = req.body.lastname;
		var email = req.body.email;
		var phonenumber = req.body.phonenumber;
		var postalcode = req.body.postalcode;
		var province = req.body.province;
		var city = req.body.city;
		var barangay = req.body.barangay;
		var street = req.body.street;

		console.log(req.body.firstname);
	}
}

module.exports = shippingDetailsController;