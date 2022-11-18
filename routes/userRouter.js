const express = require("express");
const router = express.Router();
const userController = require("../controllers/userControler");

// getting all data
router.get("/", userController.readUser);

// getting one data
router.get("/:id", userController.getUser, userController.getOneUser);

//creating data
router.post("/", userController.createUser);

//delete data
router.delete("/:id", userController.getUser, userController.deleteUser);

//update data
router.patch("/:id", userController.getUser, userController.updateUser);

module.exports = router;
