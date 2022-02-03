const express = require("express");
const router = express.Router();
const newsController = require("../controller/news-controller");
const checkNumber = require("../middleware/news-middleware");

router.get("/news", checkNumber, newsController.create);

module.exports = router;
