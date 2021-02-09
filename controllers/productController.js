const {Router} = require('express');
const {productService, accessoryService} = require('../services');
const {isLogged, isCreator, validate} = require('../middlewares');

const router = Router();

// const index = (req, res) => {
//     res.render('home', {layout: false});
// }

// router.get('/', index);

router.get('/', (req, res) => {
    productService.getAll(req.query)
        .then((products) => res.render('home/home', {products}))
        .catch(() => res.status(500).end());
});

router.get('/create', isLogged, (req, res) => {
    res.render('products/create');
});

router.post('/create', isLogged, validate.product.create, (req, res) => {
    productService.create(req.user.id, req.body)
        .then(() => res.redirect('/products'))
        .catch(() => {
            res.status(500).end()
        });
});

router.get('/details/:productId', (req, res) => {

    productService.getOne(req.params.productId, true)
        .then((product) => {

            if (req.user && product.creator) {
                product.isCreator = product.creator.toString() === req.user.id.toString();
            } else {
                product.isCreator = false;
            }

            res.render('products/details', {product});
        }).catch(() => {
        res.status(500).end()
    });
})

router.get('/:productId/attach', isLogged, async (req, res) => {
    let product = await productService.getOne(req.params.productId, false);
    let accessories = await accessoryService.getAllUnattached(product.accessories);

    res.render('products/attach', {...product, accessories});
});

router.post('/:productId/attach', isLogged, (req, res) => {
    productService.attach(req.params.productId, req.body.accessory)
        .then(() => res.redirect(`/products/details/${req.params.productId}`))
        .catch(() => {
            res.status(500).end()
        });
});

router.get('/edit/:productId', isLogged, isCreator, async (req, res) => {
    let product = await productService.getOne(req.params.productId, false);
    res.render('products/edit', {...product});
});

router.post('/edit/:productId', isLogged, isCreator, validate.product.edit, (req, res) => {
    const productId = req.params.productId;
    productService.update(productId, req.body)
        .then(() => res.redirect(`/products/details/${productId}`))
        .catch(() => res.status(500).end());
});

router.get('/delete/:productId', isLogged, isCreator, async (req, res) => {
    let product = await productService.getOne(req.params.productId, false);
    res.render('products/delete', {...product});
});

router.post('/delete/:productId', isLogged, isCreator, (req, res) => {
    productService.remove(req.params.productId)
        .then(() => res.redirect('/products'))
        .catch(() => res.status(500).end());
});

module.exports = router;
