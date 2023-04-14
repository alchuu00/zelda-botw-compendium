import React from "react";
import { startCase } from "lodash";
import HoverSound from "../components/HoverSound";
import ItemDisplay from "./ItemDisplay";

function MaterialPage({ data, selectedItem, handleItemDisplayExit, handleItemClick }) {
  return (
    <>
      <HoverSound />
      {selectedItem ? (
        <ItemDisplay item={selectedItem} handleItemDisplayExit={handleItemDisplayExit} />
      ) : (
        data && (
          Object.keys(data).map((category) => {
            if (category === "materials") {
              return (
                <div key={category} className="items-page">
                  {data[category]
                    .sort((a, b) => a.id - b.id)
                    .map((item) => (
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
                        <div className="item-name">{startCase(item.name)}</div>
                      </div>
                    ))}
                </div>
              );
            }
          })
        )
      )}
    </>
  );
}

export default MaterialPage;