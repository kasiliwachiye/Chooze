import React from "react";
import { Link } from "react-router-dom";
import './Home.css'

const Home = () => {
  return (
    <>
      <div className="hero min-h-screen bg-white">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <p className="py-6 text-5xl">
              UNDOUBTEDLY THE MOST <span className="sacred-valley">EFFECTIVE,</span>{" "} CREATIVE {' '}
              <span className="sacred-valley">&</span> RAPID
              WAY TO ENGAGE WITH <span className="sacred-valley">MILLIONS</span> OF PEOPLE ACROSS EAST AFRICA
            </p>
            <Link to="/content-creator-login">
              <button className="btn btn-primary">Get Started</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
