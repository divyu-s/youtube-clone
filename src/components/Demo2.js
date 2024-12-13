import React, { useEffect, useRef, useState } from "react";

export const Demo2 = () => {
  let x = 0;
  const [y, setY] = useState(0);
  const ref = useRef(0);

  let timer = { current: null };
  useEffect(() => {
    timer.current = setInterval(() => {
      console.log("Interval", Math.random());
    }, 1000);

    return () => {
      clearInterval(timer.current);
    };
  }, []);

  return (
    <div className="m-4 p-2 w-96 h-96 border border-black">
      <div>
        <button
          className="m-2 p-2 text-green-300 border border-green-600"
          onClick={() => {
            x = x + 1;
            console.log(x);
          }}
        >
          Increse x
        </button>
        <span>Let x {x}</span>
      </div>
      <div className="mt-1">
        <button
          className="m-2 p-2 text-green-300 border border-green-600"
          onClick={() => {
            setY(y + 1);
            console.log(y);
          }}
        >
          Increse y
        </button>
        <span>Let y {y}</span>
      </div>
      <div className="mt-1">
        <button
          className="m-2 p-2 text-green-300 border border-green-600"
          onClick={() => {
            ref.current = ref.current + 1;
            console.log(ref.current);
          }}
        >
          Increse ref
        </button>
        <span>Let ref {ref.current}</span>
      </div>

      <button
        className="m-2 p-2 text-green-300 border border-green-600"
        onClick={() => {
          clearInterval(timer.current);
        }}
      >
        Stop Timer
      </button>
    </div>
  );
};
