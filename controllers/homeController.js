const {Router} = require('express');
const router = Router();

router.get('/about', (req, res) => {
    res.render('home/about', {title: 'About'});
});

router.get('/', (req, res) => {
    res.redirect('/products');
});

module.exports = router;
