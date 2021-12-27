export const ExperienceRow = ({ data }) => {
  return (
    <div className="is-flex">
      <img
        src={data.pastExperienceImages.edges[0].node.url}
        alt=""
        width={100}
        style={{ minWidth: "100px", objectFit: "scale-down" }}
      />
      <p>{data.service.name}</p>
      <p>{data.yearPerformed}</p>
      <p>{data.location ? data.location : "Ubicacion desconocida"}</p>
      <p>{data.descriptionShort}</p>
      <hr />
    </div>
  )
}
