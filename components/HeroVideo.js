"use client";

import { CldVideoPlayer } from "next-cloudinary";
import "next-cloudinary/dist/cld-video-player.css";

const HeroVideo = () => {
  return (
    <CldVideoPlayer
      id="banner-video"
      autoplay={true}
      loop={true}
      muted={true}
      controls={false}
      //  poster={getCldImageUrl({ src: "bg-video_1_esptsj" })}
      className="banner-video fix"
      src="bg-video_1_esptsj"
    />
  );
};
export default HeroVideo;
