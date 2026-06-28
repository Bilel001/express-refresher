const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json([
        {id: 1, name: 'laptop', price: 1299},
        {id: 2, name: 'Mouse', price: 20}
    ]);
});

router.get('/special', (req, res) => {
    const specialProduct = {
        name: 'Coding2GO JS Course',
        price: 50,
    }
    res.json(specialProduct);
});

const addedProducts = [];

router.get('/:id', (req, res) => {
    const id = Number(req.params.id);
    addedProducts = [
        {id: 1, name: 'laptop', price: 1299},
        {id: 2, name: 'Mouse', price: 20}
    ];
    const requestedProduct = addedProducts.find(product => product.id === id);
    res.json(requestedProduct);
});

router.post('/', (req, res) => {
    const {name, price} = req.body;
    const newProduct = { name, price }
    addedProducts.push(newProduct);
    console.log(addedProducts);
    res.json({product: newProduct});
});



module.exports = router;