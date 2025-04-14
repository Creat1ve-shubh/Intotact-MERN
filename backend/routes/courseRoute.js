const express = require('express');
const router = express.Router();

const{uploadCourseMaterial} = require('../middleware/upload');
const {createCourse, enrollUser,} = require('../controller/courseController');


router.post('/create', uploadCourseMaterial.array('material',10), createCourse); // POST /api/course/create
router.post('/enroll', enrollUser); 

module.exports = router;
