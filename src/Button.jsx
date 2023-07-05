import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackspace } from "@fortawesome/free-solid-svg-icons";

const Button = ({ char, textSize, onClick, color }) => {
  return (
    <button
      onClick={onClick}
      className={`w-14 h-14 flex justify-center items-center ${textSize} rounded-full m-1 ${color} hover:bg-cyan-300 active:bg-cyan-800 text-white`}
    >
      {char === "CE" ? <FontAwesomeIcon icon={faBackspace} /> : char}
    </button>
  );
};

export default Button;
