import { Link, } from "react-router-dom";
import logo from "../assets/Blue__Modern_Education_Logo__1_-removebg-preview (1).png"
import React from "react";
import {toast} from "react-hot-toast";

const Navbar = (props)=>{

let isLoggedIn = props.isLoggedIn;
let setIsLoggedIn = props.setIsLoggedIn;



    return(
        <div className="flex justify-between items-center max-w-[1160px] w-11/12 mx-auto py-4">
           <Link to="/"><img src={logo} alt="Logo" width={160} height={32} loading="lazy" /></Link>

           <nav >
            <ul className="text-[#e7e5e4] flex gap-x-6" >
                <li>
                    <Link to="/">Home</Link>
                </li>

                <li>
                    <Link to="/about">About</Link>
                </li>

                <li>
                    <Link to="/result">Results</Link>
                </li>

                <li>
                    <Link to="#">Contact us</Link>
                </li>
            </ul>
           </nav>

            <div className="flex item-center text-[#e7e5e4] gap-x-5">
                { !isLoggedIn &&
                    <Link to="/login">
                        <button className="bg-[#52525b] py-[8px] px-[12px] rounded-[8px]
                         border-stone-800 border-2 hover:scale-105 hover:transition-all duration-200">Log in</button>
                    </Link>
                }
                 { !isLoggedIn &&
                    <Link to="/signup">
                        <button className="bg-[#52525b] py-[8px] px-[12px] rounded-[8px]
                         border-stone-800 border-2 hover:scale-105 hover:transition-all duration-200">Sign Up</button>
                    </Link>
                }

                 { isLoggedIn &&
                    <Link to="/login">
                     <button className="bg-[#52525b] py-[8px] px-[12px] rounded-[8px] border-stone-800 
                      border-2 hover:scale-105 hover:transition-all duration-200"  
                        onClick={() => {
                           
                                        setIsLoggedIn(false);
                                        toast.success("Logout Sucessfully")
                                       
                
              }}>
                Log Out</button>
                    </Link>
                }
                 { isLoggedIn &&
                    <Link to="/dashboard">
                        <button className="bg-[#52525b] py-[8px] px-[12px] rounded-[8px] border-stone-800 
                        border-2 hover:scale-105 hover:transition-all duration-200">Dash Board</button>
                    </Link>
                }
            </div>


        </div>
    )
}
export default Navbar;