const express = require('express');
const router = express.Router();
const Category = require('./Category');
const slugify = require('slugify')

router.get('/admin/categories/new', (req, res) => {
    res.status(200).render('admin/categories/new')
});

router.get('/admin/categories', (req, res) => {
    Category.findAll().then((categories) => {
        res.status(200).render('admin/categories/index', { categories: categories })
    }).catch((err) => {
        console.log(err)
    });
});

router.post('/categories/save', (req, res) => {
    const title = req.body.title

    if (title != undefined) {
        Category.create({
            title: title,
            slug: slugify(title)
        }).then(() => {
            res.status(200).redirect('/')
        })
    } else {
        res.redirect('/admin/categories/new')
    }
});

router.post('/categories/delete', (req, res) => {
    const id = req.body.id
    if (id != undefined) {
        if (!isNaN(id)) {
            Category.destroy({
                where: {
                    id: id
                }
            }).then(() => {
                res.redirect('/admin/categories')
            })
        } else {
            res.redirect('/admin/categories')
        }
    } else {
        res.redirect('/admin/categories')
    }
});



module.exports = router;