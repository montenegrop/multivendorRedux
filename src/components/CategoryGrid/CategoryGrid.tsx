import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { HOMEPAGE_INIT } from "../../state/actions/homepage"
import { RootState } from "../../state/reducers"
import { CategoryGridCard } from "./CategoryGridCard"

const CategoryGrid = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(HOMEPAGE_INIT())
  }, [dispatch])

  const homepageCategories = useSelector((state: RootState) => state.homepageCategories.categories)
  if (homepageCategories) {
    return (
      <div className="mb-5">
        <h2 className="has-text-centered my-5 has-text-grey has-text-weight-light">Categorias</h2>
        <div className="category-grid-desktop">
          <div className="is-flex is-justify-content-center category-grid-desktop">
            {homepageCategories.slice(0, 4).map((category, index) => {
              return <CategoryGridCard category={category} key={index} index={index} />
            })}
          </div>
          <div className="is-flex is-justify-content-center">
            {homepageCategories.slice(4, 9).map((category, index) => {
              return <CategoryGridCard category={category} key={index} index={index + 4} />
            })}
          </div>
          <div className="is-flex is-justify-content-center">
            {homepageCategories.slice(9, 13).map((category, index) => {
              return <CategoryGridCard category={category} key={index} index={index + 9} />
            })}
          </div>
        </div>
        <div className="category-grid-mobile px-5 ">
          {homepageCategories.map((category, index) => {
            return <CategoryGridCard category={category} key={index} index={index} mobile={true} />
          })}
        </div>
      </div>
    )
  }
}

export default CategoryGrid
