import {useParams} from "react-router-dom";


const Question = () => {
    let params = useParams()
    console.log(params)
    
    return (
        <div>question</div>
    )
}
export default Question;