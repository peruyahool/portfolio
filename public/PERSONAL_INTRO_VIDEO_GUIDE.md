# Yahool's Portfolio Personal Intro Video: Production & Calibration Guide

This guide details the optimal compression, format, dimensions, and settings to make your **10–12 second personal introduction video** load instantly, looking breathtakingly professional in your full-screen portfolio hero background.

---

## 🎥 1. Video Specifications & Sizing (The "Measures")

To balance extreme high resolution with fast page loads (even on mobile connections), use the following configurations:

| Parameter | Recommended Setup | Explanation |
| :--- | :--- | :--- |
| **Filename** | **`intro.mp4`** | Must be lowercase. Place it inside your `/public/` directory! |
| **Duration** | **10 to 12 Seconds** | Keep it short and high-impact. It will loop indefinitely. |
| **Resolution** | **1920 × 1080 (1080p FHD)** | Perfect balance of sharpness on 4K laptops and dense monitors. |
| **Aspect Ratio** | **16:9 Landscape** | Native widescreen. The video layout auto-centers dynamically (`object-cover`). |
| **File Size Target**| **< 1.5 MB** | Aim for under 1.5MB to ensure instantaneous container loading. |
| **Frame Rate** | **24 fps or 30 fps** | Cinematic look. Avoid 60fps as it doubles the file size. |
| **Video Codec** | **H.264 (AVC)** | Universally supported across all Chrome, Apple Safari, and mobile engines. |
| **Audio Codec** | **AAC (Stereo, 44.1kHz)** | Standard high-quality compression. Needed for when voice is active. |

---

## 🛠️ 2. Recommended Video Editing Exports

When exporting your video in editors like **CapCut, Premiere Pro, DaVinci Resolve, or Final Cut**, use these settings:

1. **Format**: Choose `.mp4` (H.264 wrapper).
2. **Bitrate Encoding**: Select **VBR, 1-pass** (Variable Bit Rate).
3. **Target Bitrate**: **1.0 to 1.5 Mbps** (megabits per second). *This keeps the file extremely light weight!*
4. **Layout Recommendation**: State your name clearly at the beginning. Make sure you are well-lit, centered in the frame, and talking to the camera. We have already programmed a beautiful ambient visualizer and overlay card so visitors can click to hear you!

---

## 🚀 3. How to Install Your Video on the Porfolio

I have built a **Zero-Friction Detection Engine** in the code. To activate your video, you do not need to edit any more code! Just do this:

1. **Record & Export** your video as `intro.mp4`.
2. **Upload/Move** the `intro.mp4` file directly into your portfolio's `/public/` directory (so that the path is exactly `/public/intro.mp4`).
3. **Refresh the Page**: The portfolio will automatically detect the presence of the file, turn off the abstract ambient demo video, load your high-resolution personal intro, and activate the custom **"Unmute My Intro" voice controller**!
