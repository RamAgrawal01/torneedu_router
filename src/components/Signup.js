import React from "react";
import Template from "./Template";
import signupImage from "../assets/signup.png";

const Signup = ({setIsLoggedIn}) =>{
    return(
<Template
        title="Join the millions learning to code with Torned Education for free"
        desc1="Build skills for today,tomorrow , and beyond"
        desc2="Education to future-proof your carrear"
        image={signupImage}
        formtype="signup"
        setIsLoggedIn={setIsLoggedIn}
        />
    )
        
}
export default Signup;