import Link from "next/link"
export const CategoryGridCard = ({ category }) => {
  console.log(category.url)
  return (
    <div
      className="w-180px h-180px low-shadow has-background-white is-clickable "
      key={category.id}
    >
      <Link href={category.name == "SERVICIOS" ? "servicios" : `category/${category.id}`}>
        <div className="is-flex is-flex-direction-column ">
          <img
            src={category.url}
            alt={category.alt}
            width="100px"
            height="100px"
            className="image is-96x96 mx-auto"
            style={{ objectFit: "cover" }}
          />

          <p className="has-text-centered">{category.name}</p>
        </div>
      </Link>
    </div>
  )
}
