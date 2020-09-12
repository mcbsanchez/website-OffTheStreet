const express = require('express');
const multer  = require('multer');

const aboutController = require('../controllers/aboutController.js');
const adminOrderController = require('../controllers/adminOrderController.js');
const adminProductController = require('../controllers/adminProductController.js');
const adminController = require('../controllers/adminController.js');
const contactController = require('../controllers/contactController.js');
const faqController = require('../controllers/faqController.js');
const homeController = require('../controllers/homeController.js');
const loginController = require('../controllers/loginController.js');
const orderCancelledController = require('../controllers/orderCancelledController.js');
const orderCompletedController = require('../controllers/orderCompletedController.js');
const orderDeliveringController = require('../controllers/orderDeliveringController.js');
const orderPendingController = require('../controllers/orderPendingController.js');
const privacyController = require('../controllers/privacyController.js');
const productDetailsController = require('../controllers/productDetailsController.js');
const searchController = require('../controllers/searchController.js');
const shippingDetailsController = require('../controllers/shippingDetailsController.js');
const shoppingCartController = require('../controllers/shoppingCartController.js');
const sizeChartController = require('../controllers/sizeChartController.js');
const termsController = require('../controllers/termsController.js');

const adminOrderPendingController = require('../controllers/adminOrderPendingController.js');
const adminOrderConfirmedController = require('../controllers/adminOrderConfirmedController.js');
const adminSettingsController = require('../controllers/adminSettingsController.js');
const app = express();

module.exports = app;

app.get('/about', aboutController.about);
app.get('/adminOrder', adminOrderController.adminOrder);
app.get('/adminProduct', adminProductController.adminProduct);
app.get('/adminHome', adminController.admin);
app.get('/contact', contactController.contact);
app.get('/faq', faqController.faq);
app.get('/', homeController.home);
app.get('/login', loginController.login);
app.get('/orderCancelled', orderCancelledController.orderCancelled);
app.get('/orderCompleted', orderCompletedController.orderCompleted);
app.get('/orderDelivering', orderDeliveringController.orderDelivering);
app.get('/orderPending', orderPendingController.orderPending);
app.get('/privacy', privacyController.privacy);
app.get('/productDetails', productDetailsController.productDetails);
app.get('/search', searchController.search);
app.get('/shippingDetails', shippingDetailsController.shippingDetails);
app.get('/shoppingCart', shoppingCartController.shoppingCart);
app.get('/sizeChart', sizeChartController.sizeChart);
app.get('/terms', termsController.terms);

app.get('/adminOrderPending', adminOrderPendingController.adminOrderPending);
app.get('/adminOrderConfirmed', adminOrderConfirmedController.adminOrderConfirmed);
app.get('/adminSettings'), adminSettingsController.adminSettings);