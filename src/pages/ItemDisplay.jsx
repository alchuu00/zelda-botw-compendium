import React from "react";

function ItemDisplay({ item, handleItemDisplayExit }) {
  return (
    <div className="item-display-main-container">
      <div className="item-display-container">
        <div>
          <p>
            {item.id.toString().padStart(3, "0")} {item.name}
          </p>
          <img src={item.image} alt="Item Image" />
        </div>
        <div>
          {item.hearts_recovered ? (
            <div>
              Hearts recovered:{" "}
              {item.hearts_recovered < 0 ? (
                <img src="src/assets/heart_half.png" alt="Half Heart" />
              ) : null}
              {item.hearts_recovered > 0 ? (
                <>
                  {[...Array(Math.floor(item.hearts_recovered))].map((_, index) => (
                    <img
                      key={index}
                      src="src/assets/heart.png"
                      alt="Full Heart"
                      style={{ marginLeft: "5px" }}
                    />
                  ))}
                  {item.hearts_recovered % 1 === 0.5 ? (
                    <img
                      src="src/assets/heart_half.png"
                      alt="Half Heart"
                      style={{ marginLeft: "5px" }}
                    />
                  ) : null}
                </>
              ) : null}
            </div>
          ) : null}
          {item.attack || item.defense ? (
            <>
              <div>Attack: {item.attack}</div>
              <div>Defense: {item.defense}</div>
            </>
          ) : null}
        </div>
      </div>
      <div className="item-display-container">
        <div>{item.description}</div>
        <div>Common locations: {item.common_locations}</div>
        {item.drops ? <div>Drops: {item.drops}</div> : null}
        {item.cooking_effect ? (
          <div>Cooking effect: {item.cooking_effect}</div>
        ) : null}
      </div>
      <div className="exit-btn" onClick={handleItemDisplayExit}></div>
    </div>
  );
}

export default ItemDisplay;
