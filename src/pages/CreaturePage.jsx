import React, { useState } from "react";
import { startCase } from "lodash";
import ItemDisplay from "./ItemDisplay";

function CreaturePage({ data }) {
  const [selectedItem, setSelectedItem] = useState(false);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <>
      {selectedItem ? (
        <ItemDisplay item={selectedItem} />
      ) : (
        <>
          {data &&
            Object.keys(data).map((category) => {
              if (category === "creatures") {
                const items = data[category]["food"]
                  .concat(data[category]["non_food"])
                  .sort((a, b) => a.id - b.id);
                return (
                  <div key={category} className="items-page">
                    {items.map((item) => (
                      <div
                        key={item.name}
                        className="item-container"
                        onClick={() => handleItemClick(item)}
                      >
                        <div className="item-img-container">
                          <img className="item-img" src={item.image} />
                          <div className="item-id">
                            {item.id.toString().padStart(3, "0")}
                          </div>
                        </div>
                        <div className="item-name">
                          {startCase(item.name)}
                        </div>
                      </div>
                    ))}
                  </div>
                );
              }
            })}
        </>
      )}
    </>
  );
}

export default CreaturePage;
