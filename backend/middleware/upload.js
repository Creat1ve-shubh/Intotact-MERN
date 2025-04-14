// uploadMiddleware.js
const multer = require('multer');
const path = require('path');

// profile pic storage
const profilePicStorage = multer.diskStorage({
  destination: './uploads/profilePics',
  filename: (req, file, cb) => {
    cb(null, `profile_${Date.now()}${path.extname(file.originalname)}`);
  },
});

const uploadProfilePic = multer({ storage: profilePicStorage });

// course material storage
const courseMaterialStorage = multer.diskStorage({
  destination: './uploads/courseMaterials',
  filename: (req, file, cb) => {
    cb(null, `material${Date.now()}${path.extname(file.originalname)}`);
  },
});

const uploadCourseMaterial = multer({ storage: courseMaterialStorage });

// ✅ Correctly export both multer instances
module.exports = { uploadProfilePic, uploadCourseMaterial };
