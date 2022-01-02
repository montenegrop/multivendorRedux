import Link from "next/link"
export const CategoryGridCard = ({ category }) => {
  console.log(category.url)
  return (
    <Link href={category.name == "SERVICIOS" ? "servicios" : `category/${category.id}`}>
      <div className="is-flex is-flex-direction-column w-180px h-180px low-shadow has-background-white  is-clickable p-3">
        <img
          src={category.url}
          alt={category.alt}
          width={70}
          height={70}
          className="image is-64x64 mx-auto my-auto"
          style={{ objectFit: "scale-down" }}
        />
        <p className="has-text-centered has-text-grey">{category.name}</p>
      </div>
    </Link>
  )
}
