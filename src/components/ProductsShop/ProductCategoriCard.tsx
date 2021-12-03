import Link from "next/link"
import { useRouter } from "next/router"
export const ProductCategoryCard = ({ data, vendor = "" }) => {
  const router = useRouter()
  const inSubCategory = router.pathname === "/category/[categoryId]/[subCategoryId]"
  return (
    <Link
      href={`${
        inSubCategory
          ? `/category/${router.query.categoryId}/${router.query.subCategoryId}/${data.id}`
          : `/category/[categoryId]/[subCategoryId]/${data.id}`
      }`}
    >
      <div className="product_card p-4">
        {data.images.length != 0 ? (
          <div className="image mx-auto is-flex is-flex-direction-column is-justify-content-center">
            <img src={data?.images[0].url} alt={data?.images[0].alt} />
          </div>
        ) : (
          <p className="mx-auto">Sin Imagen</p>
        )}
        <p>{data.name}</p>
        {data.defaultVariant?.pricing.price.net.amount != null ? (
          <p>{data.defaultVariant?.pricing.price.net.amount}</p>
        ) : (
          <p>Consultar Precio</p>
        )}
        {vendor != "" && (
          <div className="vendor">
            <p>
              vendido por <strong>{vendor}</strong>
            </p>
          </div>
        )}
      </div>
    </Link>
  )
}
