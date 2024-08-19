import React from 'react'
import './ItemCard.css'

function ItemCard(props) {
  return (
    <>
      <div className="mainBox p-2 w-1/2 md:w-1/4 border flex justify-center">
        <div className="allContent">
          <div className="item-image overflow-hidden aspect-[3/4]">
            <img src={props.img} alt="" />
          </div>
          <div className="properties pt-2 flex justify-between text-[14px] font-semibold">
            <div className="title">
              {props.title}
            </div>
            <div className="price">
              {props.price}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ItemCard