const PrestadorComponent = ({ prestador }) => {
  let specialties = ""
  prestador.specialties.forEach((item) => {
    specialties = specialties.concat(" / ", item)
  })
  return (
    <div className="prestador-card">
      <div className="prestador-header">
        <img src={prestador.image} alt="" />
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
              <h1>{prestador.score}/5</h1>
            </span>
            <p>{prestador.ratings} calificaciones</p>
          </div>
        </div>
      </div>
      <footer>
        <div className="perfil-link">ver perfil</div>
        <div>
          <p>
            Atencion 24hs <strong>{prestador.attention24hs}</strong>
          </p>
          <p>
            A <strong>{prestador.distance}</strong> de distancia
          </p>
        </div>
      </footer>
    </div>
  )
}
export default PrestadorComponent
