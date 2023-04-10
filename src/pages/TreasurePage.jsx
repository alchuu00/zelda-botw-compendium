import React from "react";
import { startCase } from "lodash";

function TreasurePage({ data }) {
  return (
    <>
      {data &&
        Object.keys(data).map((category) => {
          if (category === "treasure") {
            return (
              <div key={category} className="items-page">
                {data[category]
                  .sort((a, b) => a.id - b.id)
                  .map((item) => (
                    <div key={item.name} className="item-container">
                      <div className="item-img-container">
                        <img className="item-img" src={item.image} />
                        <div className="item-id">
                          {item.id.toString().padStart(3, "0")}
                        </div>
                      </div>
                      <div className="item-name">{startCase(item.name)}</div>
                    </div>
                  ))}
              </div>
            );
          }
        })}
    </>
  );
}

export default TreasurePage;
