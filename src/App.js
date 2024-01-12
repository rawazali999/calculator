import React, { useState } from "react";
import Button from "./Button";
import { evaluate } from "mathjs";

const btnValues = [
  { char: "C", textSize: "text-xl", color: "bg-cyan-900" },
  { char: "CE", textSize: "text-xl", color: "bg-cyan-900" },
  { char: "%", textSize: "text-xl", color: "bg-cyan-900" },
  { char: "/", textSize: "text-xl", color: "bg-cyan-900" },
  { char: "7", textSize: "text-xl", color: "bg-cyan-600" },
  { char: "8", textSize: "text-xl", color: "bg-cyan-600" },
  { char: "9", textSize: "text-xl", color: "bg-cyan-600" },
  { char: "x", textSize: "text-xl", color: "bg-cyan-900" },
  { char: "4", textSize: "text-xl", color: "bg-cyan-600" },
  { char: "5", textSize: "text-xl", color: "bg-cyan-600" },
  { char: "6", textSize: "text-xl", color: "bg-cyan-600" },
  { char: "-", textSize: "text-4xl", color: "bg-cyan-900" },
  { char: "1", textSize: "text-xl", color: "bg-cyan-600" },
  { char: "2", textSize: "text-xl", color: "bg-cyan-600" },
  { char: "3", textSize: "text-xl", color: "bg-cyan-600" },
  { char: "+", textSize: "text-3xl", color: "bg-cyan-900" },
  { char: "+/-", textSize: "text-xl", color: "bg-cyan-600" },
  { char: "0", textSize: "text-xl", color: "bg-cyan-600" },
  { char: ".", textSize: "text-3xl", color: "bg-cyan-600" },
  { char: "=", textSize: "text-3xl", color: "bg-cyan-900" },
];

function App() {
  const [calculations, setCalculations] = useState("");
  const [result, setResult] = useState("");

  const handleCalculationsChange = (event) => {
    setCalculations(event.target.value);
  };

  const handleButtonClick = (char) => {
    if (char === "C") {
      setCalculations("");
      setResult("");
    } else if (char === "CE") {
      setCalculations(calculations.slice(0, -1));
    } else if (char === "=") {
      try {
        const evalResult = evaluate(calculations);
        setResult(evalResult.toString());
      } catch (error) {
        setResult("Error");
      }
    } else if (char === "+/-") {
      setCalculations((prevCalculations) => prevCalculations * -1);
    } else {
      setCalculations((prevCalculations) =>
        char === "x" ? prevCalculations + "*" : prevCalculations + char
      );
    }
  };

  return (
    <div className="flex justify-center items-center h-screen w-screen background">
      <div className="flex flex-col justify-between border border-violet-200 shadow-2xl shadow-sky-700 rounded-lg h-auto p-4">
        <div className="flex flex-col justify-between p-4 h-full border-2 shadow-2xl my-2 rounded-lg">
          <input
            className="w-56 text-2xl text-black bg-transparent outline-none border-b border-cyan-900"
            type="text"
            value={calculations}
            onChange={handleCalculationsChange}
          />

          <div className="flex justify-end text-xl h-5 text-black" id="result">
            {result}
          </div>
        </div>
        <div className="grid grid-cols-4 ">
          {btnValues.map((btn) => (
            <Button btn={btn} onClick={() => handleButtonClick(btn.char)} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
