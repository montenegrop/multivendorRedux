import PrestadorComponent from "./ProviderComponent"

const ProviderContainer = ({ providers, observe, maxProviders }) => {
  return (
    <div className="providers-container">
      {providers.map((item, index) => {
        if (index !== maxProviders - 1) return <PrestadorComponent prestador={item} key={index} />
        else
          return (
            <div ref={observe} key={index}>
              <PrestadorComponent prestador={item} />
            </div>
          )
      })}
    </div>
  )
}
export default ProviderContainer
