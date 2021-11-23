import CarouselContainer from "../../components/Caroucel/CarouselContainer"
import { ProductData } from "../../components/Product/ProductData"
import { ProductDescription } from "../../components/Product/ProductDescription"
import { ProductFeatures } from "../../components/Product/ProductFeatures"
import { ProductImg } from "../../components/Product/ProductImage"
import { ProductImages } from "../../components/Product/ProductImages"

const Product = () => {
  const product = {
    state: "Nuevo",
    title: "reloj hombre deportivo ocear dr. digital sumergible dig169",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita mollitia voluptas laboriosam explicabo quos optio magnam, dolor voluptatum voluptatibus provident fugit delectus. Reprehenderit expedita, voluptatibus veritatis quidem pariatur minus rem!",
    opinions: 78,
    starts: 4,
    price: 2269,
    colours: ["rojo", "negro", "azul"],
    stock: 2,
    features: {
      mark: "OCEAN Dr.",
      model: "DIG169",
      gender: "Hombre",
      boxColour: "Negro",
      material: "Caucho",
    },
  }
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
  return (
    <div className="product-page-background p-6">
      <div className="product-page-container p-4">
        <ProductImages />
        <div className="grid-2col">
          <ProductImg />
          <ProductData product={product} />
        </div>
      </div>
      <div className="grid-2col has-background-white pt-6 px-6">
        <ProductFeatures product={product} />
        <div className="has-background-dark ">Espacio vacio</div>
      </div>
      <ProductDescription description={product.desc} />
      <div className="has-background-white pt-6 pb-6">
        <h2 className="px-6">Publicaciones Del Vendedor</h2>
        <CarouselContainer data={carouselData} />
      </div>
    </div>
  )
}
export default Product
