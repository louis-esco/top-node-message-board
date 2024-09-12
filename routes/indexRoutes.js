const express = require("express");
const indexController = require("../controllers/indexController");

const router = express.Router();

router.get("/", indexController.displayMsgs);
router.get("/new", indexController.displayForm);
router.get("/message/:index", indexController.displayMsgDetails);

router.post("/new", indexController.getFormData);

module.exports = router;
