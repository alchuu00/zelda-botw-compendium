import React from "react";
import homepageLogo from "/src/assets/The_Legend_of_Zelda_Breath_of_the_Wild_logo.png"

function Homepage() {
  return (
    <div className="homepage">
      <img
          src={homepageLogo}
          className="homepage-img"
          alt="Homepage Image"
        />
    </div>
  );
}

export default Homepage;
