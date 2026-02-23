const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/api/make-video', (req, res) => {
    const { scriptText, logoUrl } = req.body;
    
    // 💡 EASY LOGIC: 
    // Hum user ke script ko video ke upar 'Captions' ki tarah dikhayenge.
    // Abhi testing ke liye hum Pexels se dynamic keyword search wala link bhej rahe hain.
    
    const query = scriptText.split(' ').slice(0, 2).join(','); // Pehle 2 words se video dhoondo
    const dynamicVideo = `https://videos.pexels.com/video-files/3773487/3773487-uhd_2560_1440_30fps.mp4?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200`;

    res.json({
        success: true,
        videoUrl: dynamicVideo,
        overlayText: scriptText, // Lovable ko ye text video ke upar dikhana hoga
        brand: "PropMysore"
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Smart Engine Live on ${PORT}`));
