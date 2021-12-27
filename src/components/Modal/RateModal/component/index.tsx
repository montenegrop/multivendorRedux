import ReactStars from "react-rating-stars-component"
const RateModal = () => {
  const ratingChanged = (newRating) => {
    newRating
  }
  return (
    <div className="rate-modal">
      <h1 className="is-size-3">Calificar experiencia #10001</h1>
      <p className="is-size-4 mb-3" id="job">
        Electricidad
      </p>
      <strong>Titulo descripto de la experiencia por OSVALDO PEREZ:</strong>
      <p>
        &apos;&apos;Hice la conexion de electricidad entera de la cocina y cambie un par de
        lamparitas de la alacena&apos;&apos;
      </p>
      <div className="rate-modal-grid mt-5">
        <div>Foto principal</div>
        <div className="rate-modal-img-grid">
          <div>otra foto</div>
          <div>otra foto</div>
          <div>otra foto</div>
          <div>otra foto</div>
        </div>
        <div>Detalle del trabajo completo</div>
      </div>
      <div className="rate-modal-2col-grid mt-6">
        <div>
          <p>
            Verificar si el precio cobrado de <strong>mano de obra</strong> (no incluye repuestos)
            fue de <strong>$1200 por hora</strong>
          </p>
        </div>
        <div className="is-flex is-justify-content-center mt-2">
          <img
            src="/images/checkImage.png"
            alt="check"
            className="mr-6 is-clickable image is-32x32"
          />
          <img src="/images/cancelImage.png" alt="cancel" className="is-clickable image is-32x32" />
        </div>
      </div>
      <div className="rate-modal-2col-grid mt-6">
        <div></div>
        <div className="is-flex is-justify-content-center">
          <div className="mr-6">Malo</div>
          <div>Excelente</div>
        </div>
      </div>
      <div>
        <div className="rate-modal-2col-grid">
          <div className="h-45px pt-2">
            <strong>CALIDAD </strong>del servicio
          </div>
          <div className="h-30px mx-auto">
            <ReactStars count={5} onChange={ratingChanged} size={30} activeColor="#ffd700" />
          </div>
        </div>
        <div className="rate-modal-2col-grid">
          <div className="h-45px  pt-2">
            <strong>VELOCIDAD </strong>del servicio
          </div>
          <div className="h-30px mx-auto">
            <ReactStars count={5} onChange={ratingChanged} size={30} activeColor="#ffd700" />
          </div>
        </div>
        <div className="rate-modal-2col-grid">
          <div className="h-45px  pt-2">
            <strong>PRECIO </strong>del servicio
          </div>
          <div className="h-30px mx-auto">
            <ReactStars count={5} onChange={ratingChanged} size={30} activeColor="#ffd700" />
          </div>
        </div>
        <div className="rate-modal-2col-grid">
          <div className="h-45px  pt-2">
            <strong>ATENCION </strong>del servicio
          </div>
          <div className="h-30px mx-auto">
            <ReactStars count={5} onChange={ratingChanged} size={30} activeColor="#ffd700" />
          </div>
        </div>
      </div>

      <div className="rate-modal-2col-grid">
        <div className="my-auto">
          <p>Dejanos tu comentario, opinion o queja acerca del prestador (opcional)</p>
        </div>
        <div className="control">
          <textarea className="textarea is-info has-fixed-size"></textarea>
        </div>
      </div>
      <strong>
        Sobre CONSTRUIRTE, valoramos tu opinion por ello te molestamos con una breve encuesta sobre
        nosotros para ayudarnos a seguir mejorando y ser tu primer eleccion
      </strong>
      <div className="rate-modal-2col-grid">
        <div className="h-45px pt-2 " id="experience-rate">
          <p>¿Como calificarias tu experiencia en CONSTRUIRTE?</p>
        </div>
        <div className="h-30px mx-auto">
          <ReactStars count={5} onChange={ratingChanged} size={30} activeColor="#ffd700" />
        </div>
      </div>
      <div className="rate-modal-2col-grid mt-5">
        <div>¿Te fue util CONSTRUIRTE para encontrar Prestador?</div>
        <div className="is-flex is-justify-content-center mt-2">
          <img
            src="/images/checkImage.png"
            alt="check"
            className="mr-6 is-clickable image is-32x32"
          />

          <img src="/images/cancelImage.png" alt="cancel" className="is-clickable image is-32x32" />
        </div>
      </div>
      <div className="rate-modal-2col-grid  mt-5">
        <div>¿Es la primera vez que contratas Prestador a travez de CONSTRUIRTE?</div>
        <div className="is-flex is-justify-content-center mt-2">
          <img
            src="/images/checkImage.png"
            alt="check"
            className="mr-6 is-clickable image is-32x32"
          />

          <img src="/images/cancelImage.png" alt="cancel" className="is-clickable image is-32x32" />
        </div>
      </div>
      <div className="rate-modal-2col-grid  mt-5">
        <div>¿Como te enteraste de nosotros?</div>
        <div className="is-flex is-justify-content-center">
          <div className="select ">
            <select>
              <option>Facebook</option>
              <option>Instagram</option>
              <option>Promocion mail</option>
              <option>Un conocido</option>
              <option>Publicidad calle</option>
              <option>Publicidad web</option>
            </select>
          </div>
        </div>
      </div>
      <div className="rate-modal-2col-grid my-4">
        <div>Dejanos tu comentario, opinion o queja sobre la plataforma CONSTRUIRTE (opcional)</div>
        <div className="control">
          <textarea className="textarea is-info has-fixed-size"></textarea>
        </div>
      </div>
      <button className="button  polygon-button secondary-color">Calificar</button>
    </div>
  )
}
export default RateModal
