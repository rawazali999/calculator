import React from "react";
import Button from "./Button";
import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackspace } from "@fortawesome/free-solid-svg-icons";
// i want the numbers have a different color than the operators
const btnValues = [
  {
    char: "C",
    textSize: "text-xl",
    color: "bg-cyan-900",
  },
  {
    char: "CE",
    textSize: "text-xl",
    color: "bg-cyan-900",
  },
  {
    char: "%",
    textSize: "text-xl",
    color: "bg-cyan-900",
  },
  {
    char: "/",
    textSize: "text-xl",
    color: "bg-cyan-900",
  },
  {
    char: "7",
    textSize: "text-xl",
    color: "bg-cyan-600",
  },
  {
    char: "8",
    textSize: "text-xl",
    color: "bg-cyan-600",
  },
  {
    char: "9",
    textSize: "text-xl",
    color: "bg-cyan-600",
  },

  {
    char: "x",
    textSize: "text-xl",
    color: "bg-cyan-900",
  },
  {
    char: "4",
    textSize: "text-xl",
    color: "bg-cyan-600",
  },
  {
    char: "5",
    textSize: "text-xl",
    color: "bg-cyan-600",
  },
  {
    char: "6",
    textSize: "text-xl",
    color: "bg-cyan-600",
  },
  {
    char: "-",
    textSize: "text-4xl",
    color: "bg-cyan-900",
  },
  {
    char: "1",
    textSize: "text-xl",
    color: "bg-cyan-600",
  },
  {
    char: "2",
    textSize: "text-xl",
    color: "bg-cyan-600",
  },
  {
    char: "3",
    textSize: "text-xl",
    color: "bg-cyan-600",
  },
  {
    char: "+",
    textSize: "text-3xl",
    color: "bg-cyan-900",
  },
  {
    char: "+/-",
    textSize: "text-xl",
    color: "bg-cyan-600",
  },
  {
    char: "0",
    textSize: "text-xl",
    color: "bg-cyan-600",
  },
  {
    char: ".",
    textSize: "text-3xl",

    color: "bg-cyan-600",
  },
  {
    char: "=",
    textSize: "text-3xl",
    color: "bg-cyan-900",
  },
];

function App() {
  // write the logic here
  const [calculations, setCalculations] = useState("");
  const [result, setResult] = useState("");

  function handleButtonClick(char) {
    if (char === "C") {
      // Clear all calculations and result
      setCalculations("");
      setResult("");
    } else if (char === "CE") {
      // Clear the last input
      setCalculations(calculations.slice(0, -1));
    } else if (char === "=") {
      // Evaluate the calculations and update the result
      try {
        const evalResult = eval(calculations);
        setResult(evalResult.toString());
      } catch (error) {
        setResult("Error");
      }
    } else if (char === "+/-") {
      // Evaluate the calculations and update the result
      setCalculations(calculations * -1);
      setResult(calculations);
    } else {
      // Append the clicked button char to the calculations
      char === "x"
        ? setCalculations(calculations + "*")
        : setCalculations(calculations + char);
    }
  }
  

  return (
    <div className="flex justify-center items-center h-screen w-screen background">
      <div className="flex flex-col justify-between shadow-2xl rounded-lg h-4/5 p-2">
        <div className="flex flex-col justify-around p-4 h-full shadow-lg my-2 rounded-lg">
          <div className="flex justify-end">
            <div className="text-2xl text-black" id="calculations">
              {calculations}
            </div>
          </div>
          <div className="flex justify-end">
            <div className="text-4xl text-black" id="result">
              {result}
            </div>
          </div>
          {/* backspace icon */}
          <button className="text-cyan-900 font-bold flex justify-end ">
            <FontAwesomeIcon icon={faBackspace} className="mr-1 mt-4" />
          </button>
        </div>
        <div className="grid grid-cols-4 ">
          {btnValues.map((btn) => (
            <Button
              key={btn.char}
              char={btn.char}
              textSize={btn.textSize}
              color={btn.color}
              onClick={() => handleButtonClick(btn.char)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
