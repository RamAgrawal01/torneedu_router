import "./App.css";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import {  Routes, Route } from 'react-router-dom';
import { useState } from "react";
import React from "react";
import Result from "./components/Result";
import About from "./components/About";
import PrivateRoute from "./components/PrivateRoute";

function App() {

  const[isLoggedIn,setIsLoggedIn] = useState(false);
  console.log("chl rha h");

  return (
    <div className="w-screen h-screen bg-[#050505]"> 
     <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>

      <Routes>


        <Route path="/" element={<Home/>} />

        <Route
          path="/login"
          element={<Login setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route
          path="/signup"
          element={<Signup setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route path="/dashboard" element={
          <PrivateRoute isLoggedIn={isLoggedIn}>
            <Dashboard/>
          </PrivateRoute>
        } />

        <Route path="/result" element={<Result/>} />
        <Route path="/about" element={<About/>} />
        </Routes>
    </div>

  );
}

export default App;
