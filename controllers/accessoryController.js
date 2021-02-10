const {Router} = require('express');
const {accessoryService} = require('../services');
const {validate} = require('../middlewares');

const router = Router();

router.get('/create', (req, res) => {
    res.render('accessories/create');
});

router.post('/create', validate.accessory.create, (req, res, next) => {
    accessoryService.create(req.body)
        .then(() => res.redirect('/products'))
        .catch(next);
})

module.exports = router;
