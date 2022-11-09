import React, { useState } from "react";
import "./counter.css";

const Counter=() =>{
    // let count=0;
    const [count,setCount]=useState(0);
    const Increment=()=>{
        setCount(count+1);
        // console.log("Click"+count)
    };

    return (
    <>
      <div className="Card">
      <h1 className="Heading">{count}</h1>
        <button onClick={Increment} id="btn" >Click me</button>

      </div>
    </>
     
    );
  }
  
  export default Counter;
  