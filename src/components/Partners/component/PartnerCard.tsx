export const PartnerCard = ({ data }) => {
  return (
    <div className="bg-white-grey w-220px border-radius-15px">
      <div className="partner-img has-text-centered mx-auto">
        <div className="partner-img-div mx-auto">
          <img src={data.img} alt="" width={50} className="mt-5" />
        </div>
      </div>
      <div className="has-text-centered pb-3">
        <strong>{data.name}</strong>
        <p>{data.title}</p>
      </div>
    </div>
  )
}
