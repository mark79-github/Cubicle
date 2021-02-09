const {Router} = require('express');
const {accessoryService} = require('../services');
const {validator} = require('../middlewares');

const router = Router();

router.get('/create', (req, res) => {
    res.render('accessories/create');
});

router.post('/create', validator.accessory.create, (req, res) => {
    accessoryService.create(req.body)
        .then(() => res.redirect('/products'))
        .catch(() => res.status(500).end());
})

module.exports = router;
