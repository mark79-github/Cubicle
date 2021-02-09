const productService = require('../../services/productService');

module.exports = async (req, res, next) => {
    if (req.user) {
        let product = await productService.getOne(req.params.productId, false);
        if (product.creator.toString() !== req.user.id.toString()) {
            return res.redirect('/products');
        }
    }

    next();
}