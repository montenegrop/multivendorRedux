import PrestadorComponent from "./PrestadorComponent"

const PrestadoresContainer = ({ prestadores }) => {
  return (
    <>
      {prestadores.map((item, index) => {
        return <PrestadorComponent prestador={item} key={index} />
      })}
    </>
  )
}
export default PrestadoresContainer
