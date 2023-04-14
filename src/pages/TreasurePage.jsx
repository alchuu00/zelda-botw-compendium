import React from "react";
import { startCase } from "lodash";
import HoverSound from "../components/HoverSound";
import ItemDisplay from "./ItemDisplay";

function TreasurePage({ data, selectedItem, handleItemDisplayExit, handleItemClick }) {
  return (
    <>
      <HoverSound />
      {selectedItem ? (
        <ItemDisplay item={selectedItem} handleItemDisplayExit={handleItemDisplayExit} />
      ) : (
        data && (
          <div className="items-page">
            {data["treasure"]
              .sort((a, b) => a.id - b.id)
              .map((item) => (
                <div key={item.name} className="item-container" onClick={() => handleItemClick(item)}>
                  <div className="item-img-container">
                    <img className="item-img" src={item.image} />
                    <div className="item-id">{item.id.toString().padStart(3, "0")}</div>
                  </div>
                  <div className="item-name">{startCase(item.name)}</div>
                </div>
              ))}
          </div>
        )
      )}
    </>
  );
}

export default TreasurePage;
