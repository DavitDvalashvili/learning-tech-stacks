import Childcomponent from "./Childcomponent";

import React, { createContext} from "react";
 export const myContext = createContext (null);


const Parentcomponent = () => {

    const name = "dvala";
    return (
        <myContext.Provider value={name}>
        <>
         <h1>parent</h1>
         <Childcomponent/>
        </>
        </myContext.Provider>
    )
}



export default Parentcomponent;