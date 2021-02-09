const {Router} = require('express');
const router = Router();

const {productController, accessoryController, homeController, userController} = require('../controllers');
const {isAuthenticated} = require('../middlewares');

router.use('/', homeController);
router.use('/products', productController);
router.use('/accessories', isAuthenticated, accessoryController);
router.use('/users', userController);
router.use('*', (req, res) => {
    res.render('errors/404');
});

module.exports = router;
