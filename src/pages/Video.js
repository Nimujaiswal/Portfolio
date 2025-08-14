import React, { useState } from "react";
import "./Video.css";

const videoList = [
  { src: "/images/motion.mp4", description: "Motion video" },
  { src: "/images/next.mp4", description: "School Management App Video." },
  { src: "/images/logo.mp4", description: "Logo animation." },
  { src: "/images/DONE.mp4", description: "Banner Outro" },
  { src: "/images/Intro.mp4", description: "Adverting Video" },
  { src: "/images/TSL.mp4", description: "Cricket Club" },
  { src: "/images/Motion 2.mp4", description: "Interaction Video" },
  { src: "/images/sf.mp4", description: "Short Film" },  
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