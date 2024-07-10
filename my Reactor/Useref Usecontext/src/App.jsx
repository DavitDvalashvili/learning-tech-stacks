import "./App.css";
//import { useRef } from "react";
import Parentcomponent from "./Parentcomponent";

function App() {
  // const buttonRef = useRef(null);
  // const inputRef = useRef(null)
  return (
    //useRef
    // <>
    //   <input ref={inputRef} />
    //   <button
    //     onClick={() => {
    //       console.log(buttonRef.current);
    //       buttonRef.current.style.backgroundColor = "red";
    //       console.log(inputRef.current.value)
    //     }}
        
    //   >
    //    button1
    //   </button>
    //   <button ref={buttonRef}>
    //     button  2
    //   </button>
    // </>
    <Parentcomponent/>
  );
}

export default App;
