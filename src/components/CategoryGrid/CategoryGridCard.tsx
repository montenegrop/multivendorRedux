import Link from "next/link"
export const CategoryGridCard = ({ category, index, mobile = false }) => {
  return (
    <Link href={category.name == "SERVICIOS" ? "servicios" : `category/${category.id}`}>
      <>
        <div
          className={`is-flex ${
            !mobile && "is-flex-direction-column w-180px h-180px"
          }  has-background-white is-clickable p-3 category-grid-card`}
        >
          <img
            src={`./CategoriesLogos/${index}.png`}
            alt={category.alt}
            className={`image is-48x48 ${!mobile && "mx-auto"} mt-auto`}
            style={{ objectFit: "scale-down" }}
          />
          <p className="has-text-centered has-text-grey is-size-7 mb-auto mt-3">{category.name}</p>
        </div>
        <hr
          style={{ backgroundColor: "rgba(211, 211, 211, 0.6)", height: "1px" }}
          className="m-0"
        />
      </>
    </Link>
  )
}
