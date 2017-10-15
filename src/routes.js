const router = require('express').Router();
const controller = require('./controller/pokemonController');

router.get('/', (req, res) => {
    res.send("Welcome!!!");
});

router.get('/pokemon', controller.get);
router.get('/pokemon/:name', controller.getOne);
router.post('/pokemon/create', controller.create);
router.put('/pokemon/buy', controller.buy);

module.exports = router;