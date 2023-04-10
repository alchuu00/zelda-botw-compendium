import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  return (
    <div className="navbar animation-appear">
      <div className="links">
        <Link to="/creatures">
          <img src="src\assets\creature_icon.png" className={location.pathname === "/creatures" ? "active" : ""} />
        </Link>
        <Link to="/monsters">
          <img src="src\assets\monster_icon.png" className={location.pathname === "/monsters" ? "active" : ""} />
        </Link>
        <Link to="/materials">
          <img src="src\assets\materials_icon.png" className={location.pathname === "/materials" ? "active" : ""} />
        </Link>
        <Link to="/equipment">
          <img src="src\assets\equipment_icon.png" className={location.pathname === "/equipment" ? "active" : ""} />
        </Link>
        <Link to="/treasure">
          <img src="src\assets\treasure_icon.png" className={location.pathname === "/treasure" ? "active" : ""} />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
