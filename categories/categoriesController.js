const express = require('express');
const router = express.Router();

router.get("/categories", (req, res) => {
    res.status(200).send("Rota de categorias")
});

module.exports = router;