import React, { useState } from "react";
import { AiOutlineEye , AiOutlineEyeInvisible } from "react-icons/ai";
import {toast} from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import gif from "../assets/Fireworks-Animated-Illustratio-unscreen.gif"



const SignupForm = ({setIsLoggedIn}) => {

    const navigate = useNavigate();

    const[formData,setFormData] = useState({firstName:"" , lastName:"" , email:"",
        password:"" , confirmPassword:""
    })

    const [showPassword , setShowPassword] = useState(false);
    const [showConfirmPassword ,setShowConfirmPassword] = useState(false);
    const[accountType , setAccountType] = useState("student");
    const [showSuccessAnimation, setShowSuccessAnimation] = useState(false);


    function changeHandler(event) {
        setFormData(
            (prev) => ({
                    ...prev,
                    [event.target.name]: event.target.value,
                }),
        );
    }
    function submitHandler(e) {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
          toast.error("Passwords do not match");
          return;
        }
        if (!/[A-Z]/.test(formData.password)) {
            toast.error("Password must include at least one uppercase letter");
            return;
          }
      
          if (!/[!@#$%^&*(),.?":{}|<>]/.test(formData.password)) {
            toast.error("Password must include at least one special character");
            return;
          }
      
          if (formData.password.length < 8) {
            toast.error("Password must be at least 8 characters long");
            return;
          }
      
          // Proceed with form submission logic 
          toast.success("Account created successfully!");
          setIsLoggedIn(true);

          setShowSuccessAnimation(true);
          setTimeout(() => {
            setShowSuccessAnimation(false); // Hide the success animation after 2 seconds
            navigate("/dashboard");
          }, 6000);
       
          const accountData = {
            ...formData,
          };

          const finalData = {
            ...accountData,accountType
          }
          console.log(finalData);
          
         
          
        }
    

    return(


        <div className="-translate-[5rem] relative">

{showSuccessAnimation && (
          <div className="mt-4 flex justify-center items-center w-full">
            <img src={gif}alt="Success Animation" className="absolute" />
          </div>
        )}
            {/* Student -Instructor Tab */}
            <div className="flex bg-[#1e40af] max-w-max rounded-full p-1 gap-x-1 mt-3">
        <button
          className={`${accountType === "student"
            ?
            "bg-[#1e3a8a] text-[#FFFFE0]"
            : "bg-transparent text-[#bfdbfe]"} py-2 px-5 rounded-full transition-all duration-200`}
          onClick={() => setAccountType("student")}>
          Student
        </button>

        <button
          className={`${accountType === "instructor"
            ?
            "bg-[#1e3a8a] text-[#FFFFE0]"
            : "bg-transparent text-[#bfdbfe]"} py-2 px-5 rounded-full transition-all duration-200`}
          onClick={() => setAccountType("instructor")}>
          Instructor
        </button>
      </div>
           

            <form onSubmit={submitHandler}>
                {/* div create for first name and last name */}
                <div className="flex justify-between mt-[16px]">
                <label >
                    <p className="text-[0.9rem] text-[#FFFFE0] mb-1
                leading-[1.375rem]">
                    First Name
                    <sup className="text-[#ff7f50] text-[0.8rem]">*</sup></p>

                    <input className="bg-[#1e40af] h-[2.5rem] rounded-[0.5rem] text-[#FFFFE0] w-full p-[12px]"
                     required type="text"
                    name="firstName" placeholder="Enter First Name"
                    value={formData.firstName} onChange={changeHandler}></input>
                </label>

                <label>
                    <p className="text-[0.9rem] text-[#FFFFE0] mb-1
                leading-[1.375rem]">
                    Last Name
                    <sup className="text-[#dc2626] text-[0.8rem]">*</sup></p>

                    <input className="bg-[#1e40af] h-[2.5rem] rounded-[0.5rem] text-[#FFFFE0] w-full p-[12px]"
                     required type="text"
                    name="lastName" placeholder="Enter Last Name"
                    value={formData.lastName} onChange={changeHandler}></input>
                </label>
                </div>

            {/* Email Address */}
            <div className="mt-[16px]">
            <label>
                <p className="text-[0.9rem] text-[#FFFFE0] mb-1
                leading-[1.375rem]">
                    Email Address<sup className="text-[#dc2626] text-[0.8rem]">*</sup></p>

            <input className="bg-[#1e40af] h-[2.5rem] rounded-[0.5rem] text-[#FFFFE0] w-full p-[12px]"
             type="email" required 
            name="email" value={formData.email} placeholder="Enter Email-address"
            onChange={changeHandler}></input>
            </label>
            </div>
                

            {/*  div create password and confirm password */}
            
            <div className="flex gap-x-6 mt-[16px]" >   
                {/* new passsword section */}
                <label className="w-full relative">

                    <p className="text-[0.9rem] text-[#FFFFE0] mb-1
                leading-[1.375rem]"> 
                Create Password<sup className="text-[#dc2626] text-[0.8rem]">*</sup></p>

                    <input className="bg-[#1e40af] h-[2.5rem] rounded-[0.5rem] text-[#FFFFE0] w-full p-[12px]" 
                     required 
                     type={showPassword ? ("text") : ("password")}
                    name="password" placeholder="New Password"
                    value={formData.password} onChange={changeHandler}></input>

                     <span onClick={() => setShowPassword(!showPassword)}
                     className="absolute right-3 top-[35px] cursor-pointer">
                     {showPassword ? (<AiOutlineEye  fontSize={24} fill="#AFB2BF"  />) :
                      (<AiOutlineEyeInvisible  fontSize={24} fill="#AFB2BF" />) }
                     </span>
                </label>

                {/* confirm passsword section */}

                <label className="w-full relative">
                    <p className="text-[0.9rem] text-[#FFFFE0] mb-1
                leading-[1.375rem]"> Confirm Password<sup className="text-[#dc2626] text-[0.8rem]">*</sup></p>

                    <input className="bg-[#1e40af] rounded-[0.5rem] h-[2.5rem] text-[#FFFFE0] w-full p-[12px]" 
                    required 

                     type={showConfirmPassword ? ("text") : ("password")}
                    name="confirmPassword" placeholder="Confirm Password"
                    value={formData.confirmPassword} onChange={changeHandler}></input>

                     <span onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                     className="absolute right-3 top-[35px] cursor-pointer">
                     {showConfirmPassword ? (<AiOutlineEye fontSize={24} fill="#AFB2BF" />) 
                     : (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />) }
                     </span>
                </label>
                </div>
                   <button className=" bg-[#ff7f50] font-semibold text-[#050505]  px-[12px] py-[8px] rounded-[8px]
                     mt-6 w-full hover:scale-105 hover:transition-all duration-200 hover:font-bold">Create Account</button>

               </form>
          
        </div>
    )
}
export default SignupForm;