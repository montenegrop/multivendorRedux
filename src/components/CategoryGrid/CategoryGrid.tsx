import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import Category from "../../pages/category"
import { HOMEPAGE_INIT } from "../../state/actions/homepage"
import { RootState } from "../../state/reducers"

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
                <span className="grid_overlay">
                  <img className="grid_img" src={category.url} alt={category.alt}></img>
                  <h3 className="grid_category_name">{category.name}</h3>
                </span>
              </div>
            )
          })}
      </div>
      <Category />
    </div>
  )
}

export default CategoryGrid
