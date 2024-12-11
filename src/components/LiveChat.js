import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../redux-store/chatSlice";
import { generate, generateRandomText } from "../utils/helper";
import ChatMessage from "./ChatMessage";

const LiveChat = () => {
  const dispatch = useDispatch();
  const [liveMessage, setLiveMessage] = useState("");
  const chatMessages = useSelector((state) => state.chat.messages);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(
        addMessage({ name: generate(), message: generateRandomText(15) })
      );
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="flex flex-col flex-1">
      <div className="w-full h-[500px] ml-2 p-2 border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        {chatMessages.map((message, index) => (
          <ChatMessage
            name={message.name}
            message={message.message}
            key={index}
          />
        ))}
      </div>
      <form
        className="w-full p-2 ml-2 border border-black"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Divyanshu",
              message: liveMessage,
            })
          );
        }}
      >
        <input
          className="w-72"
          type="text"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button className="px-2 mx-2 bg-green-100">Send</button>
      </form>
    </div>
  );
};

export default LiveChat;
