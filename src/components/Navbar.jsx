import React from "react";
import { Link, useLocation } from "react-router-dom";
import creatureIcon from "/src/assets/creature_icon.png"
import monstersIcon from "/src/assets/monster_icon.png"
import materialsIcon from "/src/assets/materials_icon.png"
import equipmentIcon from "/src/assets/equipment_icon.png"
import treasureIcon from "/src/assets/treasure_icon.png"

function Navbar() {
  const location = useLocation();

  return (
    <div className="navbar animation-appear">
      <div className="links">
        <Link to="/creatures">
          <img
            src={creatureIcon}
            className={location.pathname === "/creatures" ? "active" : ""}
          />
        </Link>
        <Link to="/monsters">
          <img
            src={monstersIcon}
            className={location.pathname === "/monsters" ? "active" : ""}
          />
        </Link>
        <Link to="/materials">
          <img
            src={materialsIcon}
            className={location.pathname === "/materials" ? "active" : ""}
          />
        </Link>
        <Link to="/equipment">
          <img
            src={equipmentIcon}
            className={location.pathname === "/equipment" ? "active" : ""}
          />
        </Link>
        <Link to="/treasure">
          <img
            src={treasureIcon}
            className={location.pathname === "/treasure" ? "active" : ""}
          />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
