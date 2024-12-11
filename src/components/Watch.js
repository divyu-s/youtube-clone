import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../redux-store/appSlice";
import CommentsContainer from "./CommentContainer";
import LiveChat from "./LiveChat";

const Watch = () => {
  const [searchParam] = useSearchParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className="flex flex-col">
      <div className="px-5 flex">
        <iframe
          className="flex-4"
          width="1100"
          height="500"
          src={"https://www.youtube.com/embed/" + searchParam.get("v")}
          title="जय राम रमा रमनं समनं |  श्री रामभद्राचार्य जी | संपादक-  अतुल कृष्ण | Jai Ram Ram Ramanam Shamanam"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <LiveChat />
      </div>
      <CommentsContainer />
    </div>
  );
};

export default Watch;
