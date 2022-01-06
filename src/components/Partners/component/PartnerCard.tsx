export const PartnerCard = ({ data }) => {
  return (
    <div className="bg-white-grey w-220px border-radius-15px pt-1">
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
