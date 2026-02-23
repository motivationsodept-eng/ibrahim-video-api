const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/api/make-video', (req, res) => {
    const { scriptText } = req.body;
    console.log("Script received:", scriptText);

    // Dynamic Video Selection Logic
    let videoLink = "https://videos.pexels.com/video-files/3129957/3129957-uhd_2560_1440_25fps.mp4"; // Default
    
    const prompt = scriptText.toLowerCase();
    if (prompt.includes("house") || prompt.includes("real estate") || prompt.includes("mysore")) {
        videoLink = "https://videos.pexels.com/video-files/3773487/3773487-uhd_2560_1440_30fps.mp4";
    } else if (prompt.includes("car") || prompt.includes("speed")) {
        videoLink = "https://videos.pexels.com/video-files/3129638/3129638-uhd_2560_1440_25fps.mp4";
    }

    // 🔥 CACHE BUSTER: Timestamp add kar rahe hain taaki har baar NAYA video dikhe
    const finalUrl = `${videoLink}?t=${Date.now()}`;

    res.json({
        success: true,
        videoUrl: finalUrl
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server live on ${PORT}`));
