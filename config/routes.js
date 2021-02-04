const {Router} = require('express');
const router = Router();

const productController = require('../controllers/productController');
const homeController = require('../controllers/homeController');
const accessoryController = require('../controllers/accessoryController');
const userController = require('../controllers/userController');

router.use('/', homeController);
router.use('/products', productController);
router.use('/accessories', accessoryController);
router.use('/users', userController);
router.use('*', (req, res) => {
    res.render('errors/404');
});

module.exports = router;
