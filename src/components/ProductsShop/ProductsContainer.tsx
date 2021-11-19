import { useRouter } from "next/router"
import ProductCard from "./ProductCard"
import { ProductCategoryCard } from "./ProductCategoriCard"

const ProductsContainer = ({ data }) => {
  const router = useRouter()
  return (
    <div className="products">
      {data.map((item) => {
        return (
          <>
            {router.pathname == "/tienda/[vendorId]" && (
              <ProductCard name={item.name} price={item.price} weight={item.weight} key={item.id} />
            )}
            {router.pathname == "/categoria/product-category" && (
              <ProductCategoryCard data={item.node} />
            )}
          </>
        )
      })}
    </div>
  )
}
export default ProductsContainer
