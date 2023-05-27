import { useState } from "react";
import { Menu } from "./Menu";
import { Vedio } from "./Vedio";
const videos = {
    deer:
      "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4",
    snail:
      "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-slow.mp4",
    cat:
      "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-cute.mp4",
    spider:
      "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-eek.mp4"
  };


  const vedioNames = Object.keys(videos);

  export default function MainVedio(){
    const [videoSrc, setVideoSrc] = useState(videos.spider);
    
    function onSelectVedio(video) {
        const videoSrc= videos[video];
        console.log(videoSrc, videos);
        setVideoSrc(videoSrc);
    }

    return(
        <div>
            <h1>Project 6: Video Player</h1>
            <Menu onSelectVedio = {onSelectVedio} videoValues = {vedioNames} />
            <Vedio videoSrc={videoSrc} />
        </div>
    )
  }