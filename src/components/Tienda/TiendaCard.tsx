import Link from "next/link"
import React from "react"

const TiendaCard = (tienda) => {
  return (
    <>
      <div className="column is-half grid_card" key={tienda.id}>
        <div className="grid_img_container">
          <Link as={`categoria/${tienda.id}`} href="/categoria/[categoryId]">
            <div
              className="grid_img"
              style={{ backgroundImage: `url(${tienda.avatarImage?.url})` }}
            >
              <div className="grid_item_name">
                <p>{tienda.name}</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  )
}
export default TiendaCard
