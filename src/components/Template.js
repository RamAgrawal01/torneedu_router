import React from "react";
import frameImage from "../assets/frame.png"
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import { FcGoogle } from "react-icons/fc";


const Template = ({title,desc1,desc2,image,formtype,setIsLoggedIn}) =>{
    return(
        <div className="flex w-11/12 max-w-[1160px] mx-auto gap-x-12 gap-y-0  justify-between ">

            <div className="w-11/12  max-w-[455px] ">
                <h1 className="text-[#fafafa] font-semibold text-[1.875rem] leadng-[2.275rem]">{title}</h1>
                <p className="text-[1.125rem] leading-[1.625rem] mt-3">
                    <span className="text-[#e5e5e5]">{desc1}</span>
                    <br/>
                    <span className="text-[#93c5fd] italic">{desc2}</span>
                </p>

                {formtype === "signup" ? <SignupForm setIsLoggedIn={setIsLoggedIn} /> :
                 <LoginForm setIsLoggedIn={setIsLoggedIn} />}

                 <div className="flex w-full items-center my-2  gap-x-2">
                    <div className="h-[1px] w-full bg-[#d6d3d1]"></div>
                    <div className="text-[#d6d3d1]">OR</div>
                    <div className="h-[1px] w-full bg-[#d6d3d1]"></div>
                 </div>

                 <button className="w-full flex justify-center items-center rounded-[8px] font-medium
                 text-[#f5f5f4] border-[#a8a29e] px-[12px] py-[8px] gap-x-2 mt-3 bg-[#3d3d3d]
                 hover:scale-105 hover:transition-all duration-200">
                 <p>Sign Up with Google</p><FcGoogle /></button>

            </div>

            {/* div for picture */}

            <div className="relative w-11/12 max-w-[450px] translate-y-5">
                <img src={frameImage} alt="Pattern" width={558} height={504} loading="lazy"
                 />
                
                <img src={image} alt="patter"  loading="lazy"
                className="absolute w-[500px] -top-4 right-4 "
                />
            </div>


        </div>
    )
}
export default Template;