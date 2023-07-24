import React from "react";

const Inputoutput =(props) => {
  return (
    <div className=" w-72 flex flex-col mr-16 mt-2 " >
      <p  className=" bg-white text-slate-950  rounded-lg w-full flex items-center py-1 h-8  mx-8 my-3 ">
        {props.input}
        </p>
          <p className=" bg-white text-slate-950 w-full  rounded-lg h-8 py-1 mx-8">
            {props.output}
          </p>
        </div>
        );
  }
        export default  Inputoutput ;