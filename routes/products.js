const express = require('express');
const router = express.Router();

// placeholder for products || dummie data
const products = require('../products');

// @route   GET api/products
// @desc    Get all products of store
// @access  Private
router.get('/',(req, res) => {
  res.json(products)
});

// @route   POST api/products
// @desc    add new product
// @access  Private
router.post('/',(req, res) => {
  res.send('add product')
});

// @route   PUT api/products/:id
// @desc    Update a product
// @access  Private
router.put('/:id',(req, res) => {
  res.send('Update product')
});


// @route   DELETE api/products/:id
// @desc    Delete a product
// @access  Private
router.delete('/:id',(req, res) => {
  res.send('Delete product')
});

module.exports = router;
