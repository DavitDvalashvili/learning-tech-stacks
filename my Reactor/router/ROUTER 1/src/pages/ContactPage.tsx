import {useNavigate} from "react-router-dom"

const ContactPage = () => {
    const navigate = useNavigate();
    
    const handleNavigation = ()=> {
        navigate("./home")
    }

    
    return (
        <div>
            Contact
            <button onClick={handleNavigation}>go to home</button>
        </div>
    )
}
export default ContactPage;