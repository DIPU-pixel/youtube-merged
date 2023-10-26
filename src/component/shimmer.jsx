import React from 'react';
import VideoCard from './VideoCard';

const Shimmer = ({videos}) => {
  console.log(videos);
    const { snippet, statistics } = videos;
    const { channelTitle, title, thumbnails } = snippet;
    console.log(videos);
  return (
    <div className="shimmer-container">
      <VideoCard videos={videos} statistics={statistics} channelTitle={channelTitle} title={title} thumbnails={thumbnails}   />
    </div>
  );
};

export default Shimmer;
