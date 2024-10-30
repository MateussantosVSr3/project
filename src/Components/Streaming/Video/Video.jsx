import React from "react";
import './Video.css';
import videoFile from '../../../assets/Video/video.mp4';

const Video = () => {
    return (
        <div className="video">
            <h1 className="race">You are watching Formula E 🏁</h1>
            <video 
                src={videoFile} 
                autoPlay 
                muted 
                controls 
                loop
                className="video-player"
            />
        </div>
    );
};

export default Video;