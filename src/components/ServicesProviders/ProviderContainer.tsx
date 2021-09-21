import PrestadorComponent from "./ProviderComponent"

const ProviderContainer = ({ prestadores }) => {
  return (
    <div className="prestadores-container">
      {prestadores.map((item, index) => {
        return <PrestadorComponent prestador={item} key={index} />
      })}
    </div>
  )
}
export default ProviderContainer
