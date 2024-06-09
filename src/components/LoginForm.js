import React, { useState } from "react";
import { AiOutlineEye , AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";


const LoginForm = ({setIsLoggedIn}) =>{
    //const setIsLoggedIn=props.setIsLoggedIn;
    
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [showPassword , setShowPassword] = useState(false);

    function changeHandler(event) {
        setFormData((prev) => ({
            ...prev,
            [event.target.name]: event.target.value,
        }));
    }

    function submitHandler(e) {
        e.preventDefault();
        setIsLoggedIn(true);
        toast.success("Login Success");
        navigate("/dashboard");

        console.log(formData)
    }
 

    return(
        <form onSubmit={submitHandler} 
        className="flex flex-col w-full gap-y-4 mt-6">
                {/* Email FIeld */}
            <label className="w-full">
                <p className="text-[1.15rem] text-[#e5e5e5] mb-2
                leading-[1.375rem]">Email Address<sup className="text-[#dc2626] text-[0.8rem]">*</sup></p>

                <input className="bg-[#262626] rounded-[0.5rem] text-[#e5e5e5] w-full p-[12px]"
                    type="email"
                    required
                    value={formData.email}
                    placeholder="Enter your email address"
                    onChange={changeHandler}
                    name="email"></input>
            </label>
                {/* Password Field with both icons with forgot password */}
            <label className="w-full relative">
            <p className="text-[1.15rem] text-[#e5e5e5] mb-2
                leading-[1.375rem]">Password<sup className="text-[#dc2626] text-[0.8rem]">*</sup></p>

            <input className="bg-[#262626] rounded-[0.5rem] text-[#e5e5e5] w-full p-[12px]"
             type={showPassword ? ("text") : ("password")}
            required  name="password"
            value={formData.password} placeholder="Enter Password"
            onChange={changeHandler}></input>

            <span onClick={() => setShowPassword(!showPassword)} 
            className="absolute right-3 top-[42px] cursor-pointer">
                    {showPassword ? (<AiOutlineEye fontSize={24} fill="#AFB2BF" />) : 
                    (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />) }

            </span>

            <Link to="#"><p className="text-xs mt-1 text-[#bfdbfe] max-w-max ml-auto">Forgot Password</p></Link>
            </label>

            {/* Button for Sign in  */}
            <button className="bg-[#facc15] font-semibold text-[#050505] px-[12px] py-[8px] rounded-[8px]
            hover:scale-105 hover:transition-all duration-200">
                Sign In</button>


            
        </form>
    )
}
export default LoginForm;