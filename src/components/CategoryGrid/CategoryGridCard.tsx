import Link from "next/link"
export const CategoryGridCard = ({ category }) => {
  console.log(category.url)
  return (
    <Link href={category.name == "SERVICIOS" ? "servicios" : `category/${category.id}`}>
      <div className="is-flex is-flex-direction-column w-180px h-180px low-shadow has-background-white is-clickable p-3">
        <img
          src={category.url}
          alt={category.alt}
          className="image is-48x48 mx-auto mt-auto"
          style={{ objectFit: "scale-down" }}
        />
        <p className="has-text-centered has-text-grey is-size-7 mb-auto mt-3">{category.name}</p>
      </div>
    </Link>
  )
}
