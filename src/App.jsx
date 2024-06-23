import "./App.css";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import { Routes, Route } from 'react-router-dom';
import React, { useEffect, useState } from "react"; // Import useEffect
import Result from "./components/Result";
import About from "./components/About";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // State to manage loading state

  useEffect(() => {
    // Simulate loading time for the intro animation/video
    setTimeout(() => {
      setIsLoading(false); // After 3 seconds, set loading to false
    }, 7000); // Adjust time as needed for your animation/video
  }, []);

  return (
    <div className="w-screen h-screen bg-[#1e3a8a]">
      {/* Conditional rendering based on loading state */}
      {isLoading ? (
        <div className="lg:w-full sm:min-w-[400px] min-w-[300px] h-full flex items-center justify-center">
        <video
          autoPlay
          muted
          loop
          className="w-full h-full object-cover absolute inset-0"
        >
          <source src="https://videos.pexels.com/video-files/5091624/5091624-hd_1920_1080_24fps.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      ) : (
        <>
          {/* Render Navbar after loading */}
          <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
          
          <Routes>
            {/* Your routes */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
            <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn} />} />
            <Route
              path="/dashboard"
              element={
                <PrivateRoute isLoggedIn={isLoggedIn}>
                  <Dashboard />
                </PrivateRoute>
              }
            />
            <Route path="/result" element={<Result />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;
