import React from "react";

const Chatmessage = ({ val}) => {
  const {name,message}=val
  return (
    <div className="flex items-center  shadow py-2  ">
      <img
        className="h-8"
        src={"https://cdn-icons-png.flaticon.com/512/3177/3177440.png"}
        alt="profile"
      />
      <span className=" font-bold px-2">{name}</span>
      <span className="text-sm">{message}</span>
    </div>
  );
};

export default Chatmessage;
