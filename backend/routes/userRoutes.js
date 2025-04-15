const express = require('express');
const router = express.Router();
const { uploadProfilePic } = require('../middleware/upload');
const {
  createUserProfile,
  updateUserProfile,
  getUserProfile
} = require('../controller/userController');


// Routes
router.post('/create-user', uploadProfilePic.single('profilePic'), createUserProfile);
router.get('/:id', getUserProfile);
router.put('/update-profile/:id', uploadProfilePic.single('profilePic'), updateUserProfile);


module.exports = router;
