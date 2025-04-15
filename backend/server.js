
const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const connectDB = require("./config/db");
const userRoutes = require('./routes/userRoutes');
const authRoutes = require("./routes/auth");
const courseRoutes = require("./routes/courseRoute");
const path = require("path");
const PORT = process.env.PORT || 5000;


connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use("/api/auth", authRoutes);

app.use("/uploads", express.static(path.join(__dirname, "../uploads")));

//routes
app.use('/api/users', userRoutes);
app.use('/api/course', courseRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});
