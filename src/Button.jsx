import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackspace } from "@fortawesome/free-solid-svg-icons";

const Button = ({ btn, onClick }) => {
  const { char, color, textSize } = btn;
  return (
    <button
      onClick={onClick}
      className={`p-4 flex text-xl font-semibold justify-center items-center ${textSize} rounded-full m-1 ${color} hover:bg-cyan-300 active:bg-cyan-800 text-white`}
    >
      {char === "CE" ? <FontAwesomeIcon icon={faBackspace} /> : char}
    </button>
  );
};

export default Button;
