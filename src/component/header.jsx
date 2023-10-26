import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/slices/appSlice";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { youtube_search_api } from "../utils/YoutubeApi";
import { searchCache } from "../utils/slices/cacheSlice";
import { AlignJustify, Search } from "lucide-react";
//  import Logo from "../utils/image/youtubenewlogo.png";
const Header = () => {
  const [searchQueary, setSearchQueary] = useState("");
  const [getQueryData, setGetQueryData] = useState([]);
  const [showSuggesation, setShowSuggesation] = useState(false);
  const cacheData = useSelector((store) => store.cache);
  const dispatch = useDispatch();

  const MenuOpen = () => {
    dispatch(toggleMenu());
  };
  useEffect(() => {
    const Timmer = setTimeout(() => {
      if (cacheData[searchQueary]) {
        setGetQueryData(cacheData[searchQueary]);
      } else {
        getSearchParameter();
      }
    }, 200);
    return () => {
      clearTimeout(Timmer);
    };
  }, [searchQueary]);
  const getSearchParameter = async () => {
    const Data = await fetch(youtube_search_api + searchQueary);
    const json = await Data.json();
    setGetQueryData(json[1]);
    // console.log(getQueryData);
    // if api call is not present please update
    dispatch(
      searchCache({
        [searchQueary]: json[1],
      })
    );
  };
  return (
    <div className="flex justify-between items-center h-[65px]  top-0 sticky bg-white z-50 shadow-lg align-middle w-full md:px-5 px-2">
      <div className="flex col-span-1 items-center h-full ">
        <AlignJustify
          onClick={MenuOpen}
          className="cursor-pointer hidden md:block"
        />
        <Link to="/">
          <img
            className="h-10 mx-2"
            src={
              "https://t3.ftcdn.net/jpg/03/00/38/90/360_F_300389025_b5hgHpjDprTySl8loTqJRMipySb1rO0I.jpg"
            }
            alt="logo"
          />
        </Link>
      </div>
      <div className="flex-1 md:max-w-[500px] flex items-center px-10 flex-nowrap">
        <input
          className="w-full  border border-grey-400 p-2 rounded-l-full px-3"
          type="text"
          placeholder="search"
          value={searchQueary}
          onChange={(e) => setSearchQueary(e.target.value)}
          onFocus={() => setShowSuggesation(true)}
          onBlur={() => setShowSuggesation(false)}
        />
        <button className="border border-grey-400 p-2  rounded-r-full bg-gray-100 flex m-auto">
          <Search color="#747474" />
        </button>
        {showSuggesation && (
          <div className="absolute z-10 mt-2 w-96 border border-gray-300 bg-white rounded-b-lg shadow-lg">
            {getQueryData?.map((getValue, index) => (
              <div
                key={index}
                className="p-2 m-2 flex gap-3  hover:bg-gray-300 cursor-pointer "
              >
                <span>🔍</span>
                {getValue}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="col-span-1 flex">
        <img
          className="h-8"
          src={"https://cdn-icons-png.flaticon.com/512/3177/3177440.png"}
          alt="profile"
        />
        <span>🚨</span>
      </div>
    </div>
  );
};

export default Header;
