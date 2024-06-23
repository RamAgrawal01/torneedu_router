import React from "react";
import Template from "./Template";
import signupImage from "../assets/________.gif";

const Signup = ({setIsLoggedIn}) =>{
    return(
<Template
        title="Join thousands of Students excelling in academics and competitive exams"
        desc1="Build skills for today,tomorrow , and beyond"
        desc2="Education to future-proof your carrear"
        image={signupImage}
        formtype="signup"
        setIsLoggedIn={setIsLoggedIn}
        />
    )
        
}
export default Signup;