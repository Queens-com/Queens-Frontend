import React from 'react'

const ItemCard = () => {
    const aclass = "bg-"+[
        "slate","red"
    ][Math.random()>0.5?0:1]+"-500"
  return (
    <div className={aclass}>

    </div>
  )
}

export default ItemCard