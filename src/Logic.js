import React, { useState } from "react";

const Logic = () => {
  const [state, setState] = useState(Array(9).fill("click"));
  const [values, setvalues] = useState("X");

  const handleClick = (i) => {
    if (state[i] === "click") {
      const newState = [...state];
      newState[i] = values;
      setState(newState);
      setvalues(values === "X" ? "O" : "X");
    }
  };
  return (
    <>
      <div className="">
        {state.map((val, i) => (
          <button
            className=""
            style={{ color: "orange" }}
            key={i}
            onClick={() => handleClick(i)}
          >
            {val}
          </button>
        ))}
      </div>
    </>
  );
};

export default Logic;
