import React from "react";

const Numbers =(props) =>{
    return(
  
   <div className="px-1">
   <button
   onClick={() => props.onClick(props.number)}
    className="flex justify-center items-center text-white bg-slate-700 hover:bg-slate-400 p-5 px-7 rounded-lg  shadow-lg shadow-black">
       {props.number}
    </button>
    {props.children}
</div>
   
    )
}
export default Numbers;