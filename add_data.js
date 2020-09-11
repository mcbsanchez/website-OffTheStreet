const db = require('./models/db.js');


db.connect();

const Address = require('./models/AddressModel.js')
const Order = require('./models/OrderModel.js')
const Product = require('./models/ProductModel.js')
const ProductOrder = require('./models/ProductOrdersModel.js')
const ProductVariation = require('./models/ProductVariationModel.js')
const User = require('./models/UserModel.js')

var product = {
    name: "test",
    description: "test",
    color: "red",
    pictures: [],
    postingdate: new Date(2020, 9, 13),
    price: 100,
    category: "test",
    variations: []
}

db.insertOne(Product, product, function(flag){});

var address = {
    firstname: "test",
    lsatname: "test",
    email: "test",
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
    modepayment: "test",
    modedelivery: "test",
    address: "test",
    total: 1,
    shippingfee: 1,
    pointsused: 1,
    subtotal: 1,
    status: "test",
    timeordered: new Date(2020, 9, 13),
    timecompleted: new Date(2020, 9, 13),
    timecancelled: new Date(2020, 9, 13),
    timeconfirmed: new Date(2020, 9, 13)
}

db.insertOne(Order, order, function(flag){});

var productOrders = {
    product: "test",
    quantity: 12
}

db.insertOne(ProductOrder, productOrders, function(flag){});

var productVariation = {
    size: "test",
    quantity: 12
}

db.insertOne(ProductVariation, productVariation, function(flag){});

var user = {
    firstname: "test",
    lsatname: "test",
    email: "test",
    type: "test",
    password: "test",
    points: 12,
    address: [],
    orders: [],
    cart: [],
    wishlist: []
}

db.insertOne(User, user, function(flag){});