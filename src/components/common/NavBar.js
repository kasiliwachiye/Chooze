import React from "react";

const NavBar = ({buttonText}) => {
  return (
    <nav>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <a className="m-2 normal-case text-xl">Choose</a>
        </div>
        <div className="navbar-end">
          <a className="btn btn-primary">{buttonText}</a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
