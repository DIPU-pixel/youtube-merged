import React, { useEffect, useState } from "react";
import Chatmessage from "./Chatmessage";
import { useDispatch, useSelector } from "react-redux";
import { addChatmessage } from "../utils/slices/chatSlices";
import { GenerateName } from "../helper/NameHelper";
import { generateString } from "../helper/Stringgenerator";

const LiveChat = () => {
  const [inputValue, setInputValue] = useState("");
  const [disabled, setDisabled] = useState(false);
  const dispatch = useDispatch();
  const getChatdata = useSelector((state) => state.chat.messages);
  console.log(getChatdata, "hi");
  console.log(inputValue.length);
  const submitData = (e) => {
    e.preventDefault();
    if (inputValue.length > 0) {
      dispatch(
        addChatmessage({
          name: GenerateName(),
          message: inputValue,
        })
      );
      setInputValue("");
    } else {
      setDisabled(true);
    }
  };

  useEffect(() => {
    const LiveChatLogic = setInterval(() => {
      dispatch(
        addChatmessage({
          name: GenerateName(),
          message: generateString(10),
        })
      );
    }, 5000);

    return () => {
      clearInterval(LiveChatLogic);
    };
  }, []);
  // Update the disabled state based on inputValue
  useEffect(() => {
    setDisabled(inputValue.length === 0);
  }, [inputValue]);

  return (
    <>
      <div className="p-2 w-full h-full overflow-x-hidden  border border-blacks rounded-sm bg-slate-200 overflow-y-scroll flex flex-col-reverse">
        {getChatdata.map((val, i) => (
          <div key={i}>
            <Chatmessage val={val} />
          </div>
        ))}
      </div>

      <form
        className="flex justify-between py-3 items-center h-[70px] px-1"
        onSubmit={submitData}
      >
        <input
          type="text"
          className="px-3 h-full flex-1 border border-gray-300 outline-none rounded-sm"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          disabled={disabled}
          className={`h-full px-2 text-white border w-max border-red-50 ${
            disabled ? "bg-gray-400" : "bg-green-300"
          }`}
        >
          Add comments
        </button>
      </form>
    </>
  );
};

export default LiveChat;
