import React, { useState, useRef } from 'react';
import './MapPage.css';

const MapPage = () => {
  const [trackingId, setTrackingId] = useState('');
  const [showMapVideo, setShowMapVideo] = useState(false);
  const videoRef = useRef(null);

  const handleSearch = () => {
    if (trackingId.trim()) {
      setShowMapVideo(true);
      if (videoRef.current) {
        videoRef.current.play(); // Play the video when the search button is clicked
      }
    }
  };

  const handleInputChange = (e) => {
    setTrackingId(e.target.value);
  };

  return (
    <div className="map-page">
      <h1>Order Tracking</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Enter Your Tracking ID"
          value={trackingId}
          onChange={handleInputChange}
          className="search-input"
        />
        <button onClick={handleSearch} className="search-button">
          Search
        </button>
      </div>
      <div className="map-container">
        {showMapVideo && (
          <div className="map-video-container">
            <video
              ref={videoRef}
              className="video-player"
              src="https://cdn.pixabay.com/video/2019/12/06/29879-377759955_tiny.mp4" // Sample video URL
              muted
              loop
              playsInline
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default MapPage;
