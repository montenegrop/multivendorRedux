import Link from "next/link"
import React from "react"

const StoreCard = ({ store }) => {
  return (
    <Link as={`categoria/${store.id}`} href="/categoria/[categoryId]">
      <div className="store-card is-clickable" key={store.id}>
        <div className="store-card-img">
          <img src={store.avatarImage?.url} alt="" />
        </div>
        <div className="store-card-text m-auto">
          <p>{store.name}</p>
        </div>
      </div>
    </Link>
  )
}
export default StoreCard
/* 
<div className="grid_img_container">
          <Link as={`categoria/${store.id}`} href="/categoria/[categoryId]">
            <div className="grid_img" style={{ backgroundImage: `url(${store.avatarImage?.url})` }}>
              <p>asd</p>
            </div>
            <div className="grid_item_name">
              <p>{store.name}</p>
            </div>
          </Link>
        </div>
*/
