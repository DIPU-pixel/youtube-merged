import React, { useEffect, useState } from "react";
import { youtube_api } from "./../utils/YoutubeApi";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import Shimmer from "./shimmer";
import { useSelector } from "react-redux";

const VideoContainer = () => {
  const isMenuOpen = useSelector((state) => state.app.isMenuOpen);

  console.log(isMenuOpen);
  const [videos, setVideo] = useState([]);
  const [loading, setLoading] = useState(true);
  const getVideoData = async () => {
    try {
      const res = await fetch(youtube_api);
      const json = await res.json();
      setVideo(json.items);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getVideoData();
  }, []);
  // const shimmerEffcetsMap = videos?.map((val) => val);
  // console.log(shimmerEffcetsMap);
  return (
    <div className="flex flex-wrap p-2 ">
      {loading.length < 1
        ? Array(10)
            .fill(10)
            .map((_, index) => (
              <div>
                <Shimmer videos={videos} key={index} />
              </div>
            ))
        : videos.map((video) => (
            <Link
              key={video.id}
              to={"/watch?v=" + video.id}
              className={`w-full  h-[360px] p-2 ${
                isMenuOpen
                  ? "lg:w-1/3 md:w-1/2 w-full"
                  : "w-full md:w-1/2 lg:w-1/4"
              }   `}
            >
              <VideoCard videos={video} />
            </Link>
          ))}
    </div>
  );
};

export default VideoContainer;
