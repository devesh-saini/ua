import React from 'react'
import './ItemCard.css'

function ItemCard(props) {
  return (
    <>
      <div className="mainBox p-2 w-40 md:w-1/4 border">
        <div className="allContent">
          <div className="item-image overflow-hidden aspect-square">
            <img src={props.img} alt="" />
          </div>
          <div className="title">

          </div>
          <div className="price">
            {props.price}
          </div>
        </div>
      </div>
    </>
  )
}

export default ItemCard