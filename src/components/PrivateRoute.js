import React from "react";
import { Navigate } from "react-router-dom";
import {toast} from "react-hot-toast";




const PrivateRoute= ({isLoggedIn,children}) => {
    if(isLoggedIn){
        return children;
    }
    else{
        toast.error("you are not logged in")
       return <Navigate to="/login" />
    }
}
export default PrivateRoute;