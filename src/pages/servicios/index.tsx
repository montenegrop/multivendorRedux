import PrestadoresContainer from "./PrestadoresContainer"
const data = [
  {
    name: "Juan",
    specialties: ["Plomero", "Cerrajero"],
    score: 5,
    ratings: 8,
    attention24hs: "NO",
    distance: "3,2 Km",
    image:
      "https://ath2.unileverservices.com/wp-content/uploads/sites/13/2020/05/cabello-pintado-hombre-7-1024x1024.jpg",
  },
  {
    name: "Roman",
    specialties: ["Plomero", "Cerrajero", "Albañil"],
    score: 4,
    ratings: 3,
    attention24hs: "SI",
    distance: "1,2 Km",
    image:
      "https://ath2.unileverservices.com/wp-content/uploads/sites/13/2020/05/cabello-pintado-hombre-7-1024x1024.jpg",
  },
  {
    name: "Juan",
    specialties: ["Plomero", "Cerrajero"],
    score: 5,
    ratings: 8,
    attention24hs: "SI",
    distance: "3,2 Km",
    image:
      "https://ath2.unileverservices.com/wp-content/uploads/sites/13/2020/05/cabello-pintado-hombre-7-1024x1024.jpg",
  },
  {
    name: "Juan",
    specialties: ["Plomero", "Cerrajero"],
    score: 5,
    ratings: 8,
    attention24hs: "SI",
    distance: "3,2 Km",
    image:
      "https://ath2.unileverservices.com/wp-content/uploads/sites/13/2020/05/cabello-pintado-hombre-7-1024x1024.jpg",
  },
]
const Servicios = () => {
  return (
    <div className="prestadores-container">
      <PrestadoresContainer prestadores={data} />
    </div>
  )
}
export default Servicios
