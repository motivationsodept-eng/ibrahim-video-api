const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); // Ye Arena AI ko data lene ki permission deta hai
app.use(express.json());

app.post('/api/make-video', (req, res) => {
    const { scriptText } = req.body;

    // 💡 FIX: Hamesha direct MP4 link bhejo
    // Pexels ka direct video link use kar rahe hain
    const videoUrl = "https://player.vimeo.com/external/370331493.sd.mp4?s=231600c0082463e271297e68407481a50a1df7b0&profile_id=164&oauth2_token_id=57447761";

    res.json({
        success: true,
        videoUrl: videoUrl,
        overlayText: scriptText || "NexusVidio Preview",
        brand: "PropMysore"
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Smart Engine Live on ${PORT}`));
