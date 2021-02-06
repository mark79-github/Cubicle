const {Router} = require('express');
const accessoryService = require('../services/accessoryService');
const {validateAccessory} = require('../helpers/accessoryHelpers');

const router = Router();

router.get('/create', (req, res) => {
    res.render('accessories/create', {title: 'Create accessory'});
});

router.post('/create', validateAccessory, (req, res) => {
    accessoryService.create(req.body)
        .then(() => res.redirect('/products'))
        .catch(() => res.status(500).end());
})

module.exports = router;
