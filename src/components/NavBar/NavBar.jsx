import React from "react";
import './NavBar.css'
const NavBar = () => {
  return (
    <div>
      <nav>
        <div class="nav-wrapper" >
          <a href="#" class="brand-logo">
            Logo
          </a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li>
              <a href="sass.html">home</a>
            </li>
            <li>
              <a href="badges.html">signIn</a>
            </li>
            <li>
              <a href="collapsible.html">signUp</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
