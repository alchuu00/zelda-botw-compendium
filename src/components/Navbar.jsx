import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="nav-title">Hyrule Compendium</div>
      <div className="links">
        <Link to="/creatures"><img src="src\assets\creature_icon.png"/></Link>
        <Link to="/monsters"><img src="src\assets\monster_icon.png"/></Link>
        <Link to="/materials"><img src="src\assets\materials_icon.png"/></Link>
        <Link to="/equipment"><img src="src\assets\equipment_icon.png"/></Link>
        <Link to="/treasure"><img src="src\assets\treasure_icon.png"/></Link>
      </div>
    </div>
  );
}

export default Navbar;
