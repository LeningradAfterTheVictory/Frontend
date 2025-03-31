"use client";
import CustomVideoPlayer from "../components/video-player/CustomVideoPlayer";
import styles from './video-player.module.css';

const VideoPage = () => {
  return (
    <div className={styles.container}>
      <h1>Исторический обзор</h1>
      <CustomVideoPlayer 
        url="/videos/revolution.mp4" 
        poster="/images/video-poster.jpg"
      />
    </div>
  );
};

export default VideoPage;