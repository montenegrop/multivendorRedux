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
        <h2 className="has-text-centered my-5 has-text-grey">Categorias</h2>
        <div className="is-flex is-justify-content-center">
          {homepageCategories.slice(0, 4).map((category, index) => {
            return <CategoryGridCard category={category} key={index} />
          })}
        </div>
        <div className="is-flex is-justify-content-center">
          {homepageCategories.slice(4, 9).map((category, index) => {
            return <CategoryGridCard category={category} key={index} />
          })}
        </div>
        <div className="is-flex is-justify-content-center">
          {homepageCategories.slice(9, 13).map((category, index) => {
            return <CategoryGridCard category={category} key={index} />
          })}
        </div>
      </div>
    )
  }
}

export default CategoryGrid
/* {homepageCategories &&
  (homepageCategories.slice(0, 3).map((category) => {
    return <CategoryGridCard category={category} />
  }),
  homepageCategories.slice(3, 5).map((category) => {
    return <CategoryGridCard category={category} />
  }),
  homepageCategories.slice(5, 8).map((category) => {
    return <CategoryGridCard category={category} />
  }),
  homepageCategories.slice(8, 10).map((category) => {
    return <CategoryGridCard category={category} />
  }),
  homepageCategories.slice(10, 13).map((category) => {
    return <CategoryGridCard category={category} />
  })
  )} */
