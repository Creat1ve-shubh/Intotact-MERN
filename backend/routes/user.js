const router = require('express').Router();
const User = require('../models/User');
const { authMiddleware } = require('../middleware/authMiddleware');

router.get('/me', authMiddleware, async (req, res) => {
  const user = await User.findById(req.user.id).select('-password');
  res.json(user);
});

router.put('/profile', authMiddleware, async (req, res) => {
  const updates = req.body;
  const user = await User.findByIdAndUpdate(req.user.id, { profile: updates }, { new: true });
  res.json(user);
});

module.exports = router;