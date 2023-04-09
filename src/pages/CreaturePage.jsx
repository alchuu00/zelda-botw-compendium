import React from "react";

function CreaturePage({ data }) {
  // TODO display food + non-food items
  return (
    <div className="items-page">
      {data &&
        Object.keys(data).map((category) => {
          if (category === "creatures") {
            return Object.keys(data[category]).map((subCategory) => {
              if (subCategory === "food") {
                return (
                  <div key={subCategory} className="items-page">
                    {data[category][subCategory].map((item) => (
                      <div key={item.name}>
                        <img src={item.image} />
                      </div>
                    ))}
                  </div>
                );
              }
            });
          }
        })}
    </div>
  );
}

export default CreaturePage;
