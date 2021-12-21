import Link from "next/link"
export const CategoryGridCard = ({ category }) => {
  console.log(category.url)
  return (
    <Link href={category.name == "SERVICIOS" ? "servicios" : `category/${category.id}`}>
      <div className="is-flex is-flex-direction-column w-180px h-180px low-shadow has-background-white is-clickable p-3">
        <img
          src={category.url}
          alt={category.alt}
          width="100px"
          height="100px"
          className="image is-96x96 mx-auto my-auto"
          style={{ objectFit: "cover" }}
        />

        <p className="has-text-centered">{category.name}</p>
      </div>
    </Link>
  )
}
