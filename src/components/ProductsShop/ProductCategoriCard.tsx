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
      <div className="product_card p-0 shadow mx-auto">
        <div className="h-70per p-3 image is-flex is-flex-direction-column is-justify-content-center">
          {data.images.length != 0 ? (
            <img
              src={data?.images[0].url}
              alt={data?.images[0].alt}
              width={60}
              className="mx-auto"
            />
          ) : (
            <p className="mx-auto">Sin Imagen</p>
          )}
        </div>
        <hr className="has-background-grey-light my-2 mx-0 " style={{ height: "1px" }} />
        <div className="h-30per px-2">
          {data.defaultVariant?.pricing.price.net.amount != null ? (
            <p className="mb-0 has-text-weight-semibold has-text-black is-size-5">
              ${data.defaultVariant?.pricing.price.net.amount} +imp
            </p>
          ) : (
            <p className="mb-0">Consultar Precio</p>
          )}
          <p className="is-capitalized is-size-6 has-text-grey">{data.name}</p>

          {vendor != "" && (
            <div className="vendor">
              <p className="has-text-grey">
                vendido por <strong>{vendor}</strong>
              </p>
            </div>
          )}
        </div>
      </div>
    </Link>
  )
}
