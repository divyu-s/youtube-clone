import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="p-2 m-2 shadow-lg">
      <img
        src={thumbnails.medium.url}
        alt="card img"
        className="rounded-lg w-full"
      />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

export const AdVideoCard = ({ info }) => {
  return (
    <div className="border">
      <VideoCard info={info} />
    </div>
  );
};

export default VideoCard;
