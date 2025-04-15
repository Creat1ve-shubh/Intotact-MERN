const Course = require("../models/courseModel");


exports.createCourse = async(req,res)=>{
    try{
        const {title , description} = req.body;
        const materials = req.files.map((file)=>file.path);
        const course = new Course({title,description,materials});
        await course.save();
        res.status(201).json({
            success : true,
            message : "Course Created Successfully",
            course
        })
    }catch(error){
        res.status(500).json({error: error.message});
    }
}

exports.enrollUser = async(req,res)=>{
    try{
        const {courseId,userId} = req.body;
        const course = await Course.findById(courseId);
        if(!course.enrolledUser.includes(userId)) {
            course.enrolledUser.push(userId);
            await course.save();
            res.status(200).json({
                success : true,
                message : "User Enrolled Successfully",
                course
            })
        }
    }
    catch(error){
        res.status(500).json({error: error.message});
    }
};