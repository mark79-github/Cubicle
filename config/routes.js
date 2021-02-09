const {Router} = require('express');
const router = Router();

const {productController, accessoryController, homeController, userController} = require('../controllers');
const {isLogged} = require('../middlewares');

router.use('/', homeController);
router.use('/products', productController);
router.use('/accessories', isLogged, accessoryController);
router.use('/users', userController);
router.use('*', (req, res) => {
    res.render('errors/404');
});

module.exports = router;
