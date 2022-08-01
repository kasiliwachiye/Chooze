import React from "react";
import NavBar from "./common/NavBar";

const Home = () => {
  return (
    <>
      <NavBar buttonText='Sign In' />
      <div className="hero min-h-screen bg-white">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <p className="py-6 text-5xl">
              UNDOUBTEDLY THE MOST EFFECTIVE, CREATIVE & RAPID WAY TO ENGAGE
              WITH MILLIONS OF PEOPLE ACROSS EAST AFRICA
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
