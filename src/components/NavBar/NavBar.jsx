import React from "react";
import './NavBar.css'
const NavBar = () => {
  return (
    <div>
      <nav>
        <div className="nav-wrapper white" >
          <a href="#" className="brand-logo left">
            Logo
          </a>
          <ul id="nav-mobile" className="right">
            <li>
              <a href="sass.html">SignIn</a>
            </li>
            <li>
              <a href="badges.html">signUp</a>
            </li>
            <li>
              <a href="collapsible.html">Profile</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
