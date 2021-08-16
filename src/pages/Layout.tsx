import React from "react"

const Layout = ({ children, childrenClass = "column" }) => {
  return (
    <div>
      <div className="columns">
        <div className="column is-2"></div>
        <div className={childrenClass}>{children}</div>
        <div className="column is-2"></div>
      </div>
    </div>
  )
}

export default Layout
