import React from 'react'

function EquipmentPage({ data }) {
  return (
    <div className='items-page'>
      {data &&
        Object.keys(data).map((category) => {
          if (category === "equipment") {
            return (
              <div key={category} className='items-page'>
                {data[category].map((item)=> (
                  <div key={item.name}>
                    <img src={item.image}/>
                  </div>
                ))}
              </div>
            )
          }
        })}
    </div>
  )
}

export default EquipmentPage
