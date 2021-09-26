import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { HOMEPAGE_INIT } from "../../state/actions/homepage"
import { RootState } from "../../state/reducers"
import Link from "next/link"

const CategoryGrid = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(HOMEPAGE_INIT())
  }, [dispatch])

  const homepageCategories = useSelector((state: RootState) => state.homepageCategories.categories)
  return (
    <div className="grid_container">
      <div className="columns is-centered is-multiline grid_grid">
        {homepageCategories &&
          homepageCategories.map((category) => {
            return (
              <div
                className="column is-one-quarter-desktop is-half-tablet grid_card"
                key={category.id}
              >
                <div className="grid_img_container">
                  <Link
                    href={category.name == "SERVICIOS" ? "servicios" : `categoria/${category.id}`}
                  >
                    <div className="grid_img" style={{ backgroundImage: `url(${category.url})` }}>
                      <div className="grid_item_name">
                        <p>{category.name}</p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default CategoryGrid
