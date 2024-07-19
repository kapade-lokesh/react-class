import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="d-flex p-2 justify-content-between align-items-center m-2 bg-danger">
      <div className="logo">LOGO</div>

      <div>
        <menu className="d-flex justify-content-between align-items-center">
          <li className="m-2">
            <Link to="/">home</Link>
          </li>
          <li className="m-2">
            <Link to="/contact">contact</Link>
          </li>
          <li className="m-2">Services</li>
          <li className="m-2">help</li>
        </menu>
      </div>

      <div>
        <button>login</button>
      </div>
    </div>
  );
};

export default Header;
