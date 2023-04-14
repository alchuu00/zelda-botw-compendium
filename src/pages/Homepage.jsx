import React from "react";

function Homepage() {
  return (
    <div className="homepage animation-appear">
      <div className="homepage animation-appear">
        <img
          src="src\assets\The_Legend_of_Zelda_Breath_of_the_Wild_logo.png"
          className="homepage-img"
        />
        <div className="homepage-bg">
          <div className="homepage-text">
            <h1>Welcome to the Hyrule Compendium!</h1>
            <p>
              This project is a comprehensive guide to the world of Hyrule, as
              featured in the hit video game series The Legend of Zelda. Whether
              you're a seasoned adventurer or a curious newcomer, you'll find
              all the information you need on the creatures, monsters,
              equipment, materials, and treasure that make up this vast and
              fascinating world.
            </p>
            <p>
              To get started, simply choose a category from the navigation bar
              above. You'll be taken to a page listing all the items in that
              category. Click on an item to learn more about it, including its
              description, location, and usage.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
