/** @format */
import React, { useRef, useEffect } from "react";
import "./index.css";

import videojs from "video.js";
import "video.js/dist/video-js.css";

export default function Video() {
  const videoRef = useRef(null);
  const playerRef = useRef(null);

  const options = {
    // autoplay: true,
    controls: true,
    responsive: true,
    muted: true,
    preload: "auto",
    width: "640",
    height: "360",
    playbackRates: [0.5, 1, 1.5, 2],
    fluid: true,
    sources: [
      {
        // src: "./Assets/Videos/111.mp4",
        // type: "video/mp4",
      },
    ],
  };

  useEffect(() => {
    if (!playerRef.current) {
      const videoElement = videoRef.current;
      if (!videoElement) return;

      const player = (playerRef.current = videojs(videoElement, options, () => {
        console.log("player is ready");
      }));
    }
  }, [options, videoRef]);

  return (
    <div className="video section" id="video">
      <h2 className="section__title">Video</h2>

      <div className="video__container container">
        <p className="video__description">
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
        </p>

        {/* <div className="video__content">
          <video 
            id="video-file"
            ref={videoRef}
            className="video-js vjs-big-play-centered  vjs-playback-rate "
          /> 
        </div>  */}
      </div>
    </div>
  );
}
