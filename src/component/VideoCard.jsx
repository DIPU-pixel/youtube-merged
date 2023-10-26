/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";

const VideoCard = ({ videos }) => {
  const { snippet, statistics } = videos;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="p-3 shadow-lg  w-full h-full  ">
      <img
        className="rounded-lg w-full max-h-[200px]"
        alt="image"
        src={thumbnails?.medium?.url}
      />
      <ul className="space-y-2">
        <li className="font-bold  line-clamp-2 ">{title}</li>
        <li className="line-clamp-1">{channelTitle}</li>
        <li>{statistics?.viewCount} views </li>
      </ul>
    </div>
  );
};

export default VideoCard;
