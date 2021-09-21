import ServiceContainer from "../../components/ServicesProviders/ServicesContainer"
/* const data = [
  {
    name: "Juan",
    specialties: ["Plomero", "Cerrajero"],
    score: 5,
    ratings: 8,
    attention24hs: "NO",
    distance: "3,2 Km",
    image:
      "https://us.123rf.com/450wm/afalken/afalken1910/afalken191001330/131434789-representaci%C3%B3n-3d-de-la-gota-de-agua-azul-brillante.jpg?ver=6",
  },
  {
    name: "Roman",
    specialties: ["Plomero", "Cerrajero", "Albañil"],
    score: 4,
    ratings: 3,
    attention24hs: "SI",
    distance: "1,2 Km",
    image:
      "https://us.123rf.com/450wm/afalken/afalken1910/afalken191001330/131434789-representaci%C3%B3n-3d-de-la-gota-de-agua-azul-brillante.jpg?ver=6",
  },
  {
    name: "Juan",
    specialties: ["Plomero", "Cerrajero"],
    score: 5,
    ratings: 8,
    attention24hs: "SI",
    distance: "3,2 Km",
    image:
      "https://us.123rf.com/450wm/afalken/afalken1910/afalken191001330/131434789-representaci%C3%B3n-3d-de-la-gota-de-agua-azul-brillante.jpg?ver=6",
  },
  {
    name: "Juan",
    specialties: ["Plomero", "Cerrajero"],
    score: 5,
    ratings: 8,
    attention24hs: "SI",
    distance: "3,2 Km",
    image:
      "https://us.123rf.com/450wm/afalken/afalken1910/afalken191001330/131434789-representaci%C3%B3n-3d-de-la-gota-de-agua-azul-brillante.jpg?ver=6",
  },
] */
const imagesForGrid = [
  "https://us.123rf.com/450wm/afalken/afalken1910/afalken191001330/131434789-representaci%C3%B3n-3d-de-la-gota-de-agua-azul-brillante.jpg?ver=6",
  "https://us.123rf.com/450wm/afalken/afalken1910/afalken191001330/131434789-representaci%C3%B3n-3d-de-la-gota-de-agua-azul-brillante.jpg?ver=6",
  "https://us.123rf.com/450wm/afalken/afalken1910/afalken191001330/131434789-representaci%C3%B3n-3d-de-la-gota-de-agua-azul-brillante.jpg?ver=6",
  "https://us.123rf.com/450wm/afalken/afalken1910/afalken191001330/131434789-representaci%C3%B3n-3d-de-la-gota-de-agua-azul-brillante.jpg?ver=6",
  "https://us.123rf.com/450wm/afalken/afalken1910/afalken191001330/131434789-representaci%C3%B3n-3d-de-la-gota-de-agua-azul-brillante.jpg?ver=6",
  "https://us.123rf.com/450wm/afalken/afalken1910/afalken191001330/131434789-representaci%C3%B3n-3d-de-la-gota-de-agua-azul-brillante.jpg?ver=6",
  "https://us.123rf.com/450wm/afalken/afalken1910/afalken191001330/131434789-representaci%C3%B3n-3d-de-la-gota-de-agua-azul-brillante.jpg?ver=6",
  "https://us.123rf.com/450wm/afalken/afalken1910/afalken191001330/131434789-representaci%C3%B3n-3d-de-la-gota-de-agua-azul-brillante.jpg?ver=6",
  "https://us.123rf.com/450wm/afalken/afalken1910/afalken191001330/131434789-representaci%C3%B3n-3d-de-la-gota-de-agua-azul-brillante.jpg?ver=6",
  "https://us.123rf.com/450wm/afalken/afalken1910/afalken191001330/131434789-representaci%C3%B3n-3d-de-la-gota-de-agua-azul-brillante.jpg?ver=6",
  "https://us.123rf.com/450wm/afalken/afalken1910/afalken191001330/131434789-representaci%C3%B3n-3d-de-la-gota-de-agua-azul-brillante.jpg?ver=6",
  "https://us.123rf.com/450wm/afalken/afalken1910/afalken191001330/131434789-representaci%C3%B3n-3d-de-la-gota-de-agua-azul-brillante.jpg?ver=6",
  "https://us.123rf.com/450wm/afalken/afalken1910/afalken191001330/131434789-representaci%C3%B3n-3d-de-la-gota-de-agua-azul-brillante.jpg?ver=6",
  "https://us.123rf.com/450wm/afalken/afalken1910/afalken191001330/131434789-representaci%C3%B3n-3d-de-la-gota-de-agua-azul-brillante.jpg?ver=6",
  "https://us.123rf.com/450wm/afalken/afalken1910/afalken191001330/131434789-representaci%C3%B3n-3d-de-la-gota-de-agua-azul-brillante.jpg?ver=6",
  "https://us.123rf.com/450wm/afalken/afalken1910/afalken191001330/131434789-representaci%C3%B3n-3d-de-la-gota-de-agua-azul-brillante.jpg?ver=6",
]
const bannerImage = "https://brandme.la/wp-content/uploads/2018/01/Idealightbulbs.jpg"
const Servicios = () => {
  return (
    <>
      <ServiceContainer bannerImage={bannerImage} data={imagesForGrid} />
      {/* <ProviderContainer prestadores={data} /> */}
    </>
  )
}
export default Servicios
