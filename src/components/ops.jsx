import React from "react";

const Ops =(props) =>{
    return(
  
   <div className="px-1">
   <button
    onClick={() => props.onClick(props.op)}
    className="flex justify-center items-center text-white bg-orange-400 hover:bg-orange-700  rounded-lg  shadow-lg shadow-black w-16 h-16">
      {props.op}
    </button>
</div>
   
    );
}
export default Ops;