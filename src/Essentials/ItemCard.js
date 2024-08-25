import React from 'react'
import './ItemCard.css'

function ItemCard(props) {
  return (
    <>
      <div className="mainBox p-2 w-1/2 md:w-[250px] md:border flex justify-center">
        <div className="allContent">
          <div className="item-image overflow-hidden aspect-auto rounded-md">
            <img src={props.img} alt="" width={"250px"} height={"350px"}/>
          </div>
          <div className="properties pt-2 text-[14px] font-semibold">
            <div className="title">
              {props.title}
            </div>
            <div className="price">
              {props.price}
            </div>
          </div>
          {/* <div className="item-description text-[10px] text-gray-500">
            {props.description}
          </div> */}
        </div>
      </div>
    </>
  )
}

export default ItemCard