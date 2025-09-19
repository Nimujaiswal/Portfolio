import React, { useState } from "react";
import "./Video.css";

const videoList = [
  { src: "/images/motion.mp4", description: "Motion Animation" },
  { src: "/images/next.mp4", description: "School Management App Video" },
  { src: "/images/logo.mp4", description: "Logo Animation" },  
  { src: "/images/Intro.mp4", description: "Digital Advertising" },
  { src: "/images/TSL.mp4", description: "Cricket Club" },
  { src: "/images/Final.mp4", description: "Short Ad for App" },
  { src: "/images/Viral_Reel.mp4", description: "Interactive Short Content" },
  { src: "/images/sf.mp4", description: "Short Film" },
  { src: "/images/Motion 2.mp4", description: "Name Play" },
  { src: "/images/Task 3.gif", description: "Loader" },
  { src: "/images/DONE.mp4", description: "Banner Outro" },
];

export default function VideoGallery() {
  const [modalVideo, setModalVideo] = useState(null);
  const [hoveredVideo, setHoveredVideo] = useState(null);

  const handleMouseEnter = (idx) => {
    setHoveredVideo(idx);
  };

  const handleMouseLeave = () => {
    setHoveredVideo(null);
  };

  return (
    <div className="video-section">
      <div className="video-overlay"></div>
      <div className="main-content">
        <h2 className="page-title">Video Gallery</h2>
        <div className="video-gallery">
          {videoList.map((video, idx) => (
            <div
              className="video-card"
              key={idx}
              onClick={() => setModalVideo(video.src)}
              onMouseEnter={() => handleMouseEnter(idx)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="video-wrapper">
                <video
                  className="video-element"
                  src={video.src}
                  muted={hoveredVideo !== idx} // Unmute only when hovered
                  loop
                  autoPlay
                  ></video>
              </div>
              <p className="video-description">{video.description}</p>
            </div>
          ))}
        </div>
      </div>

      {modalVideo && (
        <div className="video-modal" onClick={() => setModalVideo(null)}>
          <div className="video-modal-content">
            <video
              className="video-modal-element"
              src={modalVideo}
              controls
              autoPlay
            ></video>
          </div>
        </div>
      )}
    </div>
  );
}
