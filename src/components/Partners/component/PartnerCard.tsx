export const PartnerCard = ({ data }) => {
  return (
    <div
      className="partner-card bg-white-grey border-radius-15px pt-1 mx-auto"
      style={{ userSelect: "none" }}
    >
      <div className="partner-img has-text-centered mx-auto">
        <div className="partner-img-div mx-auto">
          <img src={data.img} alt="" width={70} className="mt-1" />
        </div>
      </div>
      <div className="has-text-centered pb-3">
        <strong>{data.name}</strong>
        <p>{data.title}</p>
      </div>
    </div>
  )
}
