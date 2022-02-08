import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { ProductData } from "../../../components/Product/ProductData"
import { ProductDescription } from "../../../components/Product/ProductDescription"
import { ProductFeatures } from "../../../components/Product/ProductFeatures"
import { ProductImg } from "../../../components/Product/ProductImage"
import { ProductImages } from "../../../components/Product/ProductImages"
import { SIMPLE_PRODUCT_INIT } from "../../../state/actions/simpleProduct"
import { RootState } from "../../../state/reducers"
import { useRouter } from "next/router"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
const Product = () => {
  const router = useRouter()
  const carouselData = [
    {
      image:
        "https://www.casanissei.com/media/catalog/product/cache/16a9529cefd63504739dab4fc3414065/n/e/negree_2.jpg",
      price: "2018",
      title: "Reloj Hombre Digital Sumergible Ocean Dr.",
    },
    {
      image:
        "https://www.casanissei.com/media/catalog/product/cache/16a9529cefd63504739dab4fc3414065/n/e/negree_2.jpg",
      price: "2018",
      title: "Reloj Hombre Digital Sumergible Ocean Dr.",
    },
    {
      image:
        "https://www.casanissei.com/media/catalog/product/cache/16a9529cefd63504739dab4fc3414065/n/e/negree_2.jpg",
      price: "2018",
      title: "Reloj Hombre Digital Sumergible Ocean Dr.",
    },

    {
      image:
        "https://www.casanissei.com/media/catalog/product/cache/16a9529cefd63504739dab4fc3414065/n/e/negree_2.jpg",
      price: "2018",
      title: "Reloj Hombre Digital Sumergible Ocean Dr.",
    },
    {
      image:
        "https://www.casanissei.com/media/catalog/product/cache/16a9529cefd63504739dab4fc3414065/n/e/negree_2.jpg",
      price: "2018",
      title: "Reloj Hombre Digital Sumergible Ocean Dr.",
    },
    {
      image:
        "https://www.casanissei.com/media/catalog/product/cache/16a9529cefd63504739dab4fc3414065/n/e/negree_2.jpg",
      price: "$2018",
      title: "Reloj Hombre Digital Sumergible Ocean Dr.",
    },
  ]
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 700 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 700, min: 0 },
      items: 1,
    },
  }
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
      <div className="product-page-background p-6" style={{ borderRadius: "15px" }}>
        <div className="product-page-container p-4">
          <ProductImages images={simpleProduct.product.images} />
          <div className="grid-2col">
            <ProductImg image={simpleProduct.product.images[0]} />
            <ProductData simpleProduct={simpleProduct.product} />
          </div>
        </div>
        <div className="grid-2col has-background-white pt-6 px-6">
          <ProductFeatures simpleProduct={simpleProduct.product} />
          <div></div>
        </div>
        <ProductDescription description={description.blocks[0].data.text} />
        <div className="has-background-white py-6 px-6">
          <h2>Publicaciones Del Vendedor</h2>
          <Carousel
            responsive={responsive}
            showDots={false}
            ssr={true}
            itemClass="carousel-item-padding-40-px"
            className="listStyleNone"
          >
            {carouselData.map((item, index) => {
              return (
                <div
                  className="is-flex is-flex-direction-column is-align-items-center low-shadow has-background-white is-clickable p-3 m-2 has-text-centered user-select-none"
                  key={index}
                >
                  <img src={item.image} alt="" width={200} />
                  {item?.price && <p className="is-size-3">${item.price}</p>}
                  {item?.title && <p className="is-size-5">{item.title}</p>}
                </div>
              )
            })}
          </Carousel>
        </div>
      </div>
    )
  } else return null
}
export default Product
