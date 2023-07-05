import React from "react";
import Button from "./Button";
import { useState } from "react";

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

  function handleCalculationsChange(event) {
    setCalculations(event.target.value);
  }

  function handleButtonClick(char) {
    // if(calculations.length > 17){
    //   document.getElementById("calculations").style.overflow = "scroll";
    // }
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
        // eslint-disable-next-line no-eval
        const evalResult = eval(calculations);
        setResult(evalResult.toString());
      } catch (error) {
        setResult("Error");
      }
    } else if (char === "+/-") {
      // Evaluate the calculations and update the result
      setCalculations(calculations * -1);
    } else {
      // Append the clicked button char to the calculations
      char === "x"
        ? setCalculations(calculations + "*")
        : setCalculations(calculations + char);
    }

    
  }

  return (
    <div className="flex justify-center items-center h-screen w-screen background">
      <div className="flex flex-col justify-between border border-violet-200 shadow-2xl shadow-sky-700 rounded-lg h-4/5 p-4">
        <div className="flex flex-col justify-between p-4 h-full  border-2 shadow-2xl my-2 rounded-lg">
        <input
            className="w-56 text-2xl text-black  bg-transparent outline-none border-b border-cyan-900"
            type="text"
            value={calculations}
            onChange={handleCalculationsChange}
          />

          <div className="flex justify-end text-xl text-black" id="result">
            {result}
          </div>

          {/* backspace icon */}
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
