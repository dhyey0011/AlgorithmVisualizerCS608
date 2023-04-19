import React from 'react';
import './Navbar.css'
import { Link } from "react-router-dom"; /*'react-scroll';*/

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link
            activeClass="active"
            to="/home"
            spy={true}
            smooth={true}
            offset={0}
            duration={0}
            className="nav-link"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="/visualizer"
            spy={true}
            smooth={true}
            offset={20}
            duration={0}
            className="nav-link"
          >
            Visualizer
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="/info"
            spy={true}
            smooth={true}
            offset={20}
            duration={0}
            className="nav-link"
          >
            Information
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
