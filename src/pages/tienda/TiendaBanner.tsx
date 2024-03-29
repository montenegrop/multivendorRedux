import React from "react"

const tiendaBanner = ({ userData }) => {
  return (
    <>
      <div
        className="tienda_banner_background"
        style={{
          backgroundImage: `url(${userData.mainImage.url})`,
        }}
      >
        <div className="tienda_banner_user_data">
          <div
            className="tienda_banner_user_avatar"
            style={{
              backgroundImage: `url(${userData.avatarImage.url})`,
            }}
          ></div>
          <div className="tienda_banner_user_name">{userData.name}</div>
        </div>
      </div>
    </>
  )
}

export default tiendaBanner
