import React from 'react'

function MonsterPage({data}) {
  return (
<div className="items-page">
        {data &&
          Object.keys(data).map((category) => {
            if (category === "monsters") {
              return (
                <div key={category} className="items-page">
                  {data[category].map((item) => (
                    <div key={item.name}>
                      <img src={item.image} />
                    </div>
                  ))}
                </div>
              );
            }
          })}
      </div>
  )
}

export default MonsterPage