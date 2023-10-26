import React, { useEffect } from "react";
import { closeMenu } from "../utils/slices/appSlice";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  console.log(searchParams);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  });
  useEffect(() => {
    window.scrollTo(0, `0`);
  }, []);
  return (
    <div className="w-full flex-col flex-grow ">
      <div className="flex flex-wrap  w-full">
        <div className="w-full md:w-[70%] md:h-[550px] h-[270px] p-3">
          <iframe
            className="w-full h-full"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="ONLINE CLASSES GONE WRONG"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-full md:w-[30%] md:h-[550px] max-h-[300px] mb-7 md:mb-3">
          <LiveChat />
        </div>
        <div></div>
      </div>
      <div className="py-4">
        <CommentsContainer />
      </div>
    </div>
  );
};

export default WatchPage;
