export const UserTypeCard = ({ data }) => {
  return (
    <div
      className="user-type-card is-flex is-flex-direction-column is-justify-content-space-around is-align-items-center shadow p-5 mx-3 mb-4"
      style={{ userSelect: "none" }}
    >
      <img src={`./images/${data.image}.png`} alt="" width={50} />
      <strong className="has-text-weight-bold is-size-4">{data.title}</strong>
      <p className="has-text-grey">{data.text}</p>
    </div>
  )
}
