
const db = require("../models/db");
const User = require("../models/UserModel")

const registerController = {
	register: function(req,res){
		res.render('register');
    },
    
    postRegister: function(req,res){
        var firstname = req.body.firstname
        var lastname = req.body.lastname
        var email = req.body.email
        var password = req.body.password

        var user = {
            firstname: firstname,
            lastname: lastname,
            email: email,
            type: "customer",
            password: password,
            points: 0,
            address: [],
            orders: [],
            cart: [],
            wishlist: []
        }

        db.insertOne(User, user, function(){
            res.render('home')
        })
    }
}

module.exports = registerController;