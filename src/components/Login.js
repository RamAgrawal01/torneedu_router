
import Template from "./Template";
import loginImage from "../assets/login.png";

const Login = ({setIsLoggedIn}) =>{
    
        return(
            <Template
        title="Welcome Back"
        desc1="Build skills for today,tomorrow , and beyond"
        desc2="Education to future-proof your carrear"
        image={loginImage}
        formtype="login"
        setIsLoggedIn={setIsLoggedIn}
        />
        )
}
export default Login;