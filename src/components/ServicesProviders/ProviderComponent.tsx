const PrestadorComponent = ({ prestador }) => {
  let specialties = ""
  prestador.services.edges.forEach((item) => {
    specialties = specialties.concat(" / ", item.node.name)
  })
  console.log(prestador)

  return (
    <div className="prestador-card">
      <div className="prestador-header">
        <div className="prestador-image">
          {prestador.avatarImage && (
            <img src={prestador.avatarImage.url} alt={prestador.avatarImage.alt} />
          )}
        </div>
        <div className="prestador-desc">
          <h1>{prestador.name}</h1>
          <p>
            <strong>Electricista</strong>
            {specialties}
          </p>
          <div className="prestador-rating">
            <span>
              <img
                src="https://imgprd19.hobbylobby.com/c/6c/c1/c6cc1fe766f35a04f6444e262a2303e065a9fe03/700Wx700H-230714-0819-px.jpg"
                alt=""
              />
              <h1>{prestador.relevance}/5</h1>
            </span>
            <p>{prestador.ratings} calificaciones</p>
          </div>
        </div>
      </div>
      <footer>
        <div className="perfil-link">ver perfil</div>
        <div>
          <p>
            Atencion 24hs <strong>{prestador.openHours}</strong>
          </p>
          <p>
            A <strong>{prestador.location ? prestador.location.id : 0} </strong> de distancia
          </p>
        </div>
      </footer>
    </div>
  )
}
export default PrestadorComponent
