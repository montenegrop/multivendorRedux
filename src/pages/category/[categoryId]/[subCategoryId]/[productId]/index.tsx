import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import CarouselContainer from "../../../../../components/Caroucel/CarouselContainer"
import { ProductData } from "../../../../../components/Product/ProductData"
import { ProductDescription } from "../../../../../components/Product/ProductDescription"
import { ProductFeatures } from "../../../../../components/Product/ProductFeatures"
import { ProductImg } from "../../../../../components/Product/ProductImage"
import { ProductImages } from "../../../../../components/Product/ProductImages"
import { SIMPLE_PRODUCT_INIT } from "../../../../../state/actions/simpleProduct"
import { RootState } from "../../../../../state/reducers"
import { useRouter } from "next/router"
const Product = () => {
  const router = useRouter()
  const carouselData = [
    {
      image:
        "https://www.casanissei.com/media/catalog/product/cache/16a9529cefd63504739dab4fc3414065/n/e/negree_2.jpg",
      price: "$2018",
      title: "Reloj Hombre Digital Sumergible Ocean Dr.",
    },
    {
      image:
        "https://www.casanissei.com/media/catalog/product/cache/16a9529cefd63504739dab4fc3414065/n/e/negree_2.jpg",
      price: "$2018",
      title: "Reloj Hombre Digital Sumergible Ocean Dr.",
    },
    {
      image:
        "https://www.casanissei.com/media/catalog/product/cache/16a9529cefd63504739dab4fc3414065/n/e/negree_2.jpg",
      price: "$2018",
      title: "Reloj Hombre Digital Sumergible Ocean Dr.",
    },

    {
      image:
        "https://www.casanissei.com/media/catalog/product/cache/16a9529cefd63504739dab4fc3414065/n/e/negree_2.jpg",
      price: "$2018",
      title: "Reloj Hombre Digital Sumergible Ocean Dr.",
    },
    {
      image:
        "https://www.casanissei.com/media/catalog/product/cache/16a9529cefd63504739dab4fc3414065/n/e/negree_2.jpg",
      price: "$2018",
      title: "Reloj Hombre Digital Sumergible Ocean Dr.",
    },
    {
      image:
        "https://www.casanissei.com/media/catalog/product/cache/16a9529cefd63504739dab4fc3414065/n/e/negree_2.jpg",
      price: "$2018",
      title: "Reloj Hombre Digital Sumergible Ocean Dr.",
    },
  ]
  const dispatch = useDispatch()
  const simpleProduct = useSelector((state: RootState) => state.simpleProduct)
  useEffect(() => {
    dispatch(SIMPLE_PRODUCT_INIT({ id: router.query.productId, channel: "default-channel" }))
  }, [dispatch])
  if (simpleProduct.loading) {
    return <p>Cargando...</p>
  }
  if (simpleProduct.error) {
    return <p>Error...</p>
  }
  if (simpleProduct.product && !simpleProduct.loading && !simpleProduct.error) {
    const description = JSON.parse(simpleProduct.product.descriptionJson)

    return (
      <div className="product-page-background p-6">
        <div className="product-page-container p-4">
          <ProductImages images={simpleProduct.product.images} />
          <div className="grid-2col">
            <ProductImg image={simpleProduct.product.images[0]} />
            <ProductData simpleProduct={simpleProduct.product} />
          </div>
        </div>
        <div className="grid-2col has-background-white pt-6 px-6">
          <ProductFeatures simpleProduct={simpleProduct.product} />
          <div className="has-background-dark ">Espacio vacio</div>
        </div>
        <ProductDescription description={description.blocks[0].data.text} />
        <div className="has-background-white pt-6 pb-6">
          <h2 className="px-6">Publicaciones Del Vendedor</h2>
          <CarouselContainer data={carouselData} />
        </div>
      </div>
    )
  } else return null
}
export default Product
