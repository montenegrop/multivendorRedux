import Link from "next/link"
import React from "react"

const StoreCard = ({ store }) => {
  return (
    <Link href={`tienda/${store.id}`}>
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
