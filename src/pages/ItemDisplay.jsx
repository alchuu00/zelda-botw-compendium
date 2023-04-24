import React from "react";
import { startCase } from "lodash";

function ItemDisplay({ item, handleItemDisplayExit }) {
  return (
    <>
      <div className="item-display-main-container">
        <div className="item-display-main-bg">
          <div className="item-display-container a">
            <h1>
              {item.id.toString().padStart(3, "0")} {item.name}
            </h1>
            <img className="item-img" src={item.image} alt="Item Image" />

            <div>
              {item.hearts_recovered !== undefined && (
                <div>
                  Hearts recovered:{" "}
                  {item.hearts_recovered < 0 ? (
                    <img src="src/assets/heart_half.png" alt="Half Heart" />
                  ) : null}
                  {item.hearts_recovered > 0 ? (
                    <>
                      {[...Array(Math.floor(item.hearts_recovered))].map(
                        (_, index) => (
                          <img
                            key={index}
                            src="src/assets/heart.png"
                            alt="Full Heart"
                            className="margin"
                          />
                        )
                      )}
                      {item.hearts_recovered % 1 === 0.5 ? (
                        <img
                          src="src/assets/heart_half.png"
                          alt="Half Heart"
                          className="margin"
                        />
                      ) : null}
                    </>
                  ) : null}
                  {item.hearts_recovered === 0 ? <span>0</span> : null}
                </div>
              )}

              {item.attack || item.defense ? (
                <div>
                  {item.attack ? <div>Attack: {item.attack}</div> : null}
                  {item.defense ? <div>Defense: {item.defense}</div> : null}
                </div>
              ) : null}
            </div>
          </div>
          <div className="item-display-container b">
            <img className="line" src="src\assets\line.png"></img>
            <div className="description">{item.description}</div>
            <img className="line" src="src\assets\line.png"></img>
            {item.common_locations && item.common_locations.length > 0 && (
              <div className="display-row">
                <strong>Common locations: </strong>
                {item.common_locations.map((location, index) => (
                  <div key={index}>
                    <span>{startCase(location)}</span>
                    {index !== item.common_locations.length - 1 && (
                      <span>, </span>
                    )}
                  </div>
                ))}
              </div>
            )}

            <div className="display-row">
              {item.drops && item.drops.length > 0 ? (
                <div className="display-row">
                  <strong>Drops: </strong>
                  {item.drops.map((drop, index) => (
                    <div key={index}>
                      <span>{startCase(drop)}</span>
                      {index !== item.drops.length - 1 && <span>, </span>}
                    </div>
                  ))}
                </div>
              ) : null}
            </div>

            <div className="display-row">
              {item.cooking_effects && item.cooking_effects.length > 0 ? (
                <div className="display-row">
                  <strong>Cooking effects: </strong>
                  {item.cooking_effects.map((effect, index) => (
                    <span key={index}>{startCase(effect)}</span>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
          <div className="item-display-container c"><div className="exit-btn" onClick={handleItemDisplayExit}><img src="src\assets\back.png" alt="" /></div></div>
        </div>
      </div>
    </>
  );
}

export default ItemDisplay;
