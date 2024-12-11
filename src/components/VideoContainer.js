import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../constants/constant";
import VideoCard, { AdVideoCard } from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    setVideos(json?.items);
  };

  return (
    <div className="flex flex-wrap">
      {videos[0] && (
        <div className="flex-grow w-72">
          <Link to={"/watch?v=" + videos[0]?.id}>
            <AdVideoCard info={videos[0]} />{" "}
          </Link>
        </div>
      )}
      {videos.map((videoData) => (
        <div className="flex-grow w-72">
          <Link to={"/watch?v=" + videoData?.id}>
            <VideoCard info={videoData} key={videoData?.id} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default VideoContainer;
