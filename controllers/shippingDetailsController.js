const shippingDetailsController = {
	shippingDetails: function(req,res){
		var total = req.body.total;
		var numItems = req.body.numItems;
		var details = {
			total: total,
			numItems: numItems
		}
		console.log(req.body.total)
		console.log("hello")
		res.render('shipping-details', {details: details});
	}
}

module.exports = shippingDetailsController;