import Link from "next/link"
import { useRouter } from "next/router"
const SubCategory = ({ item }) => {
  const router = useRouter()
  return (
    <Link href={`/category/${router.query.categoryId}/${item.node.id}`}>
      <div
        className={`subcategory_container ${
          item.node.name.toLowerCase() == "repuestos" && "w-100per"
        }`}
      >
        <div className="textInImage">
          <img
            src={item.node.backgroundImage?.url}
            alt={item.node.backgroundImage?.alt}
            className={`${item.node.name.toLowerCase() !== "repuestos" && "h-180px"}`}
          />
          <div className="texto">
            <p>{item.node.name}</p>
          </div>
        </div>
        {item.node.products.edges.length != 0 && (
          <div className="subcategory_products productEfect">
            {item.node.products.edges.map((prod, index) => {
              return (
                <p key={index}>
                  <strong>{prod.node.name}</strong>
                </p>
              )
            })}
          </div>
        )}
      </div>
    </Link>
  )
}
export default SubCategory
