// exports.getAllUsers = (req, res) => {
//     res.send("Get all users - to be implemented by Simran");
// };

// exports.getUserById = (req, res) => {
//     res.send(`Get user by ID ${req.params.id} - to be implemented`);
// };

// exports.updateUserProfile = (req, res) => {
//     res.send(`Update user profile ${req.params.id} - to be implemented`);
// };

const User = require('../models/User');

exports.createUserProfile  = async(req,res)=>{
    try{
        const{name,email,password,role} = req.body;
        const profilePic = req.file.path;

        const user = new User({name , email ,password , role, profilePic});
        await user.save();

        res.status(201).json({message : "user profile created" , user});
    }catch(error){

    }
};


exports.updateUserProfile  = async(req,res)=>{
    try{
        const {name ,email,password,role} = req.body;
        const profilePic = req.file?.path;

        //prepare the update object
        const updateData = {};
        if (name) updateData.name = name;
        if (email) updateData.email = email;
        if (password) updateData.password = password; 
        if (role) updateData.role = role;
        if (profilePic) updateData.profilePic = profilePic;

        
    const user = await User.findByIdAndUpdate(req.params.id, updateData, {
        new: true,
        runValidators: true
      });

    if (!user) return res.status(404).json({error: 'User not found'});
    res.status(200).json({message: 'Profile updated successfully', user});

    }catch(error){
        res.status(500).json({error : error.message})
    }
}

exports.getUserProfile = async(req,res)=>{
    try{
        const user = await User.findById(req.params.id);
        if(!user) return res.status(404).json({error : 'user not found'});
        res.json(user);
    }catch(err){
        res.status(500).json({error : err.message})
    }
}