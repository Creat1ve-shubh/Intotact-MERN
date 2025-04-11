const express = require("express");
const router = express.Router();
const User = require("../models/User");

const {getAllUsers , getUserById, updateUserProfile} = require("../controllers/userController");
const { isAuthenticated } = require("../middlewares/authMiddleware");

router.get("/", isAuthenticated, getAllUsers);  //GET /api/users
router.get("/:id", isAuthenticated, getUserById);  //GET/api/users/:id
router.put("/:id", isAuthenticated, updateUserProfile);  //PUT /api/users/:id

module.exports = router;