import React from "react";
import Button from "./Button";

const List = [
  "All",
  "Gaming",
  "Songs",
  "Live",
  "Soccer",
  "Cricket",
  "Cooking",
  "Valentines",
  "Songs",
  "Live",
  "Soccer",
  "Cricket",
  "Cooking",
  "Valentines",
  "Songs",
  "Live",
  "Soccer",
  "Cricket",
  "Cooking",
  "Valentines",
];
const ButtonList = () => {
  return (
    <div className="flex overflow-x-scroll scrollbar-hide">
      {List.map((item, index) => (
        <Button name={item} key={index} />
      ))}
    </div>
  );
};

export default ButtonList;
