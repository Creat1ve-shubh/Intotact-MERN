exports.getAllUsers = (req, res) => {
    res.send("Get all users - to be implemented by Simran");
};

exports.getUserById = (req, res) => {
    res.send(`Get user by ID ${req.params.id} - to be implemented`);
};

exports.updateUserProfile = (req, res) => {
    res.send(`Update user profile ${req.params.id} - to be implemented`);
};