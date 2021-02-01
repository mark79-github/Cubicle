const {Router} = require('express');
const router = Router();

const productController = require('../controllers/productController');
const homeController = require('../controllers/homeController');
const accessoryController = require('../controllers/accessoryController');

router.use('/', homeController);
router.use('/products', productController);
router.use('/accessories', accessoryController);
router.use('*', (req, res) => {
    res.render('errors/404');
});

module.exports = router;
