import React from 'react';
import './Navbar.css'
import { Link } from 'react-scroll';

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link
            activeClass="active"
            to="home"
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
            to="pathfinding-visualizer"
            spy={true}
            smooth={true}
            offset={-90}
            duration={0}
            className="nav-link"
          >
            Pathfinding Visualizer
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="sorting-visualizer"
            spy={true}
            smooth={true}
            offset={20}
            duration={0}
            className="nav-link"
          >
            Sorting Visualizer
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
