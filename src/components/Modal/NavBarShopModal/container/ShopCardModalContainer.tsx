export const ShopCardModalContainer = ({ data }) => {
  return (
    <div className="grid-2col mx-6">
      {data.map((item, index) => {
        return (
          <div key={index}>
            <img src={item.img} alt="" className="" />
            <p className="underlined">{item.name}</p>
            <p className="underlined">{item.title}</p>
            <p className="underlined">{item.phone}</p>
            <p className="underlined">{item.mail}</p>
          </div>
        )
      })}
    </div>
  )
}
