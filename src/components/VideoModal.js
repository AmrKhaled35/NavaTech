import React from 'react';
import './VideoModal.css'; 

const VideoModal = ({ isOpen, onClose, videoSrc }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>X</button>
        <video src={videoSrc} controls autoPlay style={{ width: '100%', height: '100%' }} />
      </div>
    </div>
  );
};

export default VideoModal;
