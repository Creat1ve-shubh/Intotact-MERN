const router = require('express').Router();
const Batch = require('../models/Batch');
const Course = require('../models/courseModel');
const { authMiddleware, checkRole } = require('../middleware/authMiddleware');

router.post('/', authMiddleware, checkRole(['Tutor', 'Admin']), async (req, res) => {
    const { name, courseId } = req.body;
    const batch = new Batch({ name, course: courseId });
    await batch.save();
    await Course.findByIdAndUpdate(courseId, { $push: { batches: batch._id } });
    res.status(201).json(batch);
});

router.put('/:id/students', authMiddleware, checkRole(['Admin']), async (req, res) => {
    const { studentIds } = req.body;
    const batch = await Batch.findByIdAndUpdate(req.params.id, {
        $addToSet: { students: { $each: studentIds } }
    }, { new: true });
    res.json(batch);
});

module.exports = router;