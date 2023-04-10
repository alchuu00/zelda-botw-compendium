import React from "react";

function Homepage({ handlePlayButtonClick }) {
  return (
    <div className="homepage animation-appear">
      <div className="homepage animation-appear">
        <img
          src="src\assets\The_Legend_of_Zelda_Breath_of_the_Wild_logo.png"
          className="homepage-img"
        ></img>
        <p>For a better user experience click this button!</p>
        <button onClick={handlePlayButtonClick}>Click Me</button>
      </div>
    </div>
  );
}

export default Homepage;
