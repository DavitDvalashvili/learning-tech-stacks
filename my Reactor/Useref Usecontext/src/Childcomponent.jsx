import {myContext} from "./Parentcomponent.jsx"
import {useContext} from "react"


const Childcomponent = () => {
    const context = useContext(myContext);

    return (
        <h1>{context}</h1>
    )
}



export default Childcomponent;