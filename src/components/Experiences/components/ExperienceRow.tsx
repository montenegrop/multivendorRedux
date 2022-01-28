export const ExperienceRow = ({ data }) => {
  return (
    <div className="is-flex is-justify-content-space-between my-4">
      <div className="is-flex w-50per has-text-black">
        <img
          src={data.pastExperienceImages.edges[0].node.url}
          alt=""
          width={150}
          style={{ minWidth: "100px", objectFit: "cover" }}
        />
        <article style={{ width: "80%" }} className="ml-2">
          <div className="is-flex is-justify-content-space-between is-flex-wrap-wrap">
            <p className="is-size-5 mb-1 is-uppercase">{data.service.name} </p>
            <p className="is-size-5 mb-1 is-uppercase">{data.yearPerformed}</p>
            <p className="is-size-5 mb-1 ">
              {data.location ? data.location : "Ubicacion desconocida"}
            </p>
          </div>
          <p className="is-size-6">{data.descriptionShort}</p>
        </article>
      </div>
    </div>
  )
}
