// import { render } from "@testing-library/react";
// import React, { useState } from "react";
import Rt from "../src/router/router"


function App() {
  
    return(
      <div>
        <Rt />
      </div>
    )
}

export default App;

// const [value, setValue] = useState(0)
  // const [str, setStr] = useState("")

  // function handleChange(e) {
  //   setValue(value + 1)
  // }

  
  // function handleInput(e) {
  //   setStr(e.target.value)
  // }

  // return (
    // <>
    //   <h1>APP PAge</h1>
    //   <div>{value}-{str}</div>
    //   <button onClick={handleChange}>+1</button>
    //   <input value={str} onInput={handleInput}></input>
    // </>
  // );