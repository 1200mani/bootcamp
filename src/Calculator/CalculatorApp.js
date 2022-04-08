
import React, { useState } from "react";
import './Calculator.css'

function CalculatorApp() {
  const [value, setValue] = useState("");

  let [result, setResult] = useState(0);

  const handleClick = (input) => {
    const num = value.concat(input);
    setValue(num);
  }
  const handleClear = () => {
    setValue("");
    setResult(0);
  }
  const onBack = () =>{
    if(value !== ''){
      const delNum = value.slice(0,value.length-1);
      setValue(delNum);
    }
    }

  const action = () => {
    //check which op includes in string
    if (value.includes("+")) {
      const store = value.split("+").map(Number);
      console.log(store);
      setResult(result + store[0] + store[1]);
    }
    else if (value.includes("-")) {
      const store = value.split("-").map(Number);
      console.log(store);
      setResult(result + store[0] - store[1]);
    }
    else if (value.includes("*")) {
      const store = value.split("*").map(Number);
      console.log(store);
      setResult(result + store[0] * store[1]);
    }
    else if (value.includes("/")) {
      const store = value.split("/").map(Number);
      console.log(store);
      setResult(result + store[0] / store[1]);
    }

  }

  return (
    <div className="wrapper">
      <div className="val">{value} </div>
      <input type="text" value={result} />
      <div className="button">
        
        <button onClick={() => handleClear()}>AC</button>
        <button onClick={onBack}>x</button><br/>
        <button onClick={() => handleClick("9")}>9</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("7")}>7</button><br />
        <button onClick={() => handleClick("6")}>6</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("4")}>4</button><br />
        <button onClick={() => handleClick("3")}>3</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("1")}>1</button><br />
        <button onClick={() => handleClick("0")}>0</button>
        <button onClick={() => handleClick("-")}>-</button>
        <button onClick={() => handleClick("+")}>+</button><br />
        <button onClick={() => handleClick("*")}>*</button>
        <button onClick={() => handleClick("/")}>/</button>
        <button onClick={action} >=</button>
      </div>
    </div>
  );
}

export default CalculatorApp;
