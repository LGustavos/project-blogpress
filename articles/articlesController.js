const express = require('express');
const router = express.Router();

router.get("/articles", (req, res) => {
    res.status(200).send("Rota de artigos")
});

module.exports = router;