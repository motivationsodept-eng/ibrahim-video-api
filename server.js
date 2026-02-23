const express = require('express');
const cors = require('cors');
const app = express();

// Lovable se connection allow karne ke liye CORS
app.use(cors());
app.use(express.json());

// 🚀 AAPKI KHUD KI API ENDPOINT
app.post('/api/make-video', (req, res) => {
    console.log("Data received:", req.body);
    
    // Abhi testing ke liye hum ek sample video link return kar rahe hain
    res.json({
        success: true,
        message: "Ibrahim bhai ki API successfully connect ho gayi hai! 🔥",
        videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4" // Dummy video
    });
});

// Server Start Setup
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

