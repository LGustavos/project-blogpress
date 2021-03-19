const express = require('express');
const router = express.Router();

router.get('/admin/categories/new', (req, res) => {
    res.status(200).render('admin/categories/new')
});

module.exports = router;