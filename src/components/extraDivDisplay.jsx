import {useState} from "react";
import extraDiv from "./extraDiv";

const Display = () => {
    const [div , setDiv]=useState(["466" , "888" , "45754"])
  return(
      <div className={"flex flex-col  justify-center content-center items-center gap-3 "}>
          <div className={"text-2xl font-bold  mt-2 text-white  "}>
              other operators
          </div>
          <div >
              {div.map((div)=>(
                  <extraDiv extraDiv={div}/>
              ))}
          </div>

      </div>
  )
}
export default Display;