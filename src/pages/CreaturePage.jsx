import React from 'react'

function CreaturePage(props) {
  const data = props.data;

  return (
    <div className='items-page'>
      {data &&
        Object.keys(data).map((category) => {
          if (category === "creatures") {
            return Object.keys(data[category]).map((subCategory) => {
              if (subCategory === "food") {
                return (
                  <div key={subCategory}>
                    {data[category][subCategory].map((item)=> (
                      <div key={item.name}>
                        <p>{item.name}</p>
                        <img src={item.image} style={{width:50}} />
                      </div>
                    ))}
                  </div>
                );
              }
            });
          }
        })}
    </div>
  )
}

export default CreaturePage;
