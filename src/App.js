import React from "react";
import { useState } from "react";
import Numbers from "./components/Numbers";
import Ops from "./components/ops";
import Inputoutput from "./components/Inputoutput";



const Calculator = () => {

  const [input, setInput] = useState('')
  const [output, setOutput] = useState("0")

  const handleOpClick = (op) => {
    setInput(input + op)
  }

  const handleClick = (number) => {
    setInput(input + number)
  }
  const handleClear = () => {
    setInput('');
    setOutput('0');
  }
  const handleEquals = () => {
    setOutput(eval(input));
  }


  return (
    <div className=" flex items-center justify-center h-screen w-screen  bg-red-200">
      <div className="flex items-center justify-center   flex-col bg-gray-900 rounded-xl shadow-md shadow-orange-950  ">

        <Inputoutput input={input} output={output}

        />
        <div className="flex flex-col m-3">
          <div className="flex flex-row p-3">
            <Numbers number={"1"} onClick={() => handleClick("1")} />
            <Numbers number={"2"} onClick={() => handleClick("2")} />
            <Numbers number={"3"} onClick={() => handleClick("3")} />
            <Ops op={"x"} onClick={() => handleOpClick("*")} />
          </div>
          <div className="flex flex-row p-3">
            <Numbers number={"4"} onClick={() => handleClick("4")} />
            <Numbers number={"5"} onClick={() => handleClick("5")} />
            <Numbers number={"6"} onClick={() => handleClick("6")} />
            <Ops op={"-"} onClick={() => handleOpClick("-")} />
          </div>
          <div className="flex flex-row p-3">
            <Numbers number={"7"} onClick={() => handleClick("7")} />
            <Numbers number={"8"} onClick={() => handleClick("8")} />
            <Numbers number={"9"} onClick={() => handleClick("9")} />
            <Ops op={"+"} onClick={() => handleOpClick("+")} />
          </div>
          <div className="flex flex-row p-3" >
            <Numbers number={"0"} onClick={() => handleClick("0")} />
            <Ops op={"="} onClick={() => handleEquals("=")} />
            <Ops op={"c"} onClick={() => handleClear("c")} />
            <Ops op={"/"} onClick={() => handleOpClick("/")} />
          </div>
        </div>

        <div>



        </div>


      </div>



    </div>



  );

}

export default Calculator;