const router = require('express').Router();
const Course = require('../models/courseModel');
const { authMiddleware, checkRole } = require('../middleware/authMiddleware');

router.post('/', authMiddleware, checkRole(['Tutor', 'Admin']), async (req, res) => {
    const { title, description } = req.body;
    const course = new Course({ title, description, tutor: req.user.id });
    await course.save();
    res.status(201).json(course);
});

router.get('/', authMiddleware, async (req, res) => {
    const courses = await Course.find().populate('tutor', 'name email');
    res.json(courses);
});

module.exports = router;