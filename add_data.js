const db = require('./models/db.js');


db.connect();

const Address = require('./models/AddressModel.js')
const Order = require('./models/OrderModel.js')
const Product = require('./models/ProductModel.js')
const ProductOrder = require('./models/ProductOrdersModel.js')
const ProductVariation = require('./models/ProductVariationModel.js')
const User = require('./models/UserModel.js')

var blackShirt = {
    name: "Black Shirt",
    description: "This is a black shirt.",
    color: "black",
    pictures: [],
    postingdate: new Date(2020, 9, 13),
    price: 100,
    category: "shirt",
    variations: []
}
var whiteShirt = {
    name: "White Shirt",
    description: "This is a white shirt.",
    color: "white",
    pictures: [],
    postingdate: new Date(2020, 9, 13),
    price: 100,
    category: "shirt",
    variations: []
}
var blueJeans = {
    name: "blueJeans",
    description: "This is a pair of blue jeans.",
    color: "blue",
    pictures: [],
    postingdate: new Date(2020, 9, 13),
    price: 100,
    category: "pants",
    variations: []
}

db.insertMany(Product, [blackShirt, whiteShirt, blueJeans])

var address = {
    firstname: "John",
    lastname: "Doe",
    email: "john_doe@gmail.com",
    phonenum: 09090909090,
    postalcode: 0909087,
    province: "test",
    city: "test",
    barangay: "test",
    addressline: "test"
}

db.insertOne(Address, address, function(flag){});

var order = {
    numitems: 1,
    products: "test",
    modepayment: "COD",
    modedelivery: "Shipment",
    address: "test",
    total: 1,
    shippingfee: 1,
    pointsused: 1,
    subtotal: 1,
    status: "pending",
    timeordered: new Date(2020, 9, 13),
    timecompleted: new Date(2020, 9, 13),
    timecancelled: new Date(2020, 9, 13),
    timeconfirmed: new Date(2020, 9, 13)
}

db.insertOne(Order, order, function(flag){});

var orderOne = {
    product: "test",
    user:"test",
    quantity: 12
}
var orderTwo = {
    product: "test",
    user:"test",
    quantity: 3
}

db.insertMany(ProductOrder, [orderOne, orderTwo])

var variationOne = {
    size: "S",
    quantity: 12
}
var variationTwo = {
    size: "M",
    quantity: 9
}

db.insertMany(ProductVariation, [variationOne, variationTwo])

var user = {
    firstname: "John",
    lastname: "Doe",
    email: "john_doe@gmail.com",
    type: "customer",
    password: "john123",
    points: 12,
    address: [],
    orders: [],
    cart: [],
    wishlist: []
}

db.insertOne(User, user, function(flag){});