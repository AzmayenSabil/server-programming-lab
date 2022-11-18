const express = require("express");
const router = express.Router();
const homeController = require("./controllers/homeController");
const userController = require("./controllers/userController");

router.get("/", homeController.getMessageList);
router.post("/findMessage", homeController.getMessage);
router.post("/", homeController.postMessage);

router.post("/addUser", userController.postUser)

module.exports = router;