const {Router} = require('express');
const productService = require('../services/productService');
const accessoryService = require('../services/accessoryService');
const {validateProduct} = require('../helpers/productHelpers');

const router = Router();

// const index = (req, res) => {
//     res.render('home', {layout: false});
// }

// router.get('/', index);

router.get('/', (req, res) => {
    productService.getAll(req.query)
        .then((products) => res.render('home/home', {title: 'Products', products}))
        .catch(() => res.status(500).end());
});

router.get('/create', (req, res) => {
    res.render('products/create', {title: 'Create product'});
});

router.post('/create', validateProduct, (req, res) => {
    productService.create(req.body)
        .then(() => res.redirect('/products'))
        .catch(() => res.status(500).end());
});

router.get('/details/:productId', (req, res) => {
    productService.getOne(req.params.productId, true)
        .then(product => res.render('products/details', {title: 'Details', product}))
        .catch(() => res.status(500).end());
})

router.get('/:productId/attach', async (req, res) => {
    let product = await productService.getOne(req.params.productId, false);
    let accessories = await accessoryService.getAllUnattached(product.accessories);

    res.render('products/attach', {
        title: 'Attach accessory',
        product,
        accessories
    });
});

router.post('/:productId/attach', (req, res) => {
    productService.attach(req.params.productId, req.body.accessory)
        .then(() => res.redirect(`/products/details/${req.params.productId}`))
        .catch(() => res.status(500).end());
});

module.exports = router;
