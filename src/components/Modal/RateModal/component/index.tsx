import { Formik } from "formik"
import ReactStars from "react-rating-stars-component"
const RateModal = () => {
  const ratingChanged = (newRating) => {
    console.log(newRating)
  }
  const initialValues = {
    agreedPrice: false,
    qualityOfService: 0,
    speedOfService: 0,
    priceOfTheService: 0,
    attentionOfTheService: 0,
    commentAboutTheLender: "",
    experienceRating: 0,
    useful: false,
    firstTime: false,
    aboutUs: "",
    commentAboutTheConstruirte: "",
  }
  type FormErrors = {
    agreedPrice?: string
    qualityOfService?: string
    speedOfService?: string
    priceOfTheService?: string
    attentionOfTheService?: string
    commentAboutTheLender?: string
    experienceRating?: string
    useful?: string
    firstTime?: string
    aboutUs?: string
    commentAboutTheConstruirte?: string
  }
  const validate = (values) => {
    const errors: FormErrors = {}
    if (!values.agreedPrice) {
      errors.agreedPrice = "Obligatorio"
    }
    if (!values.qualityOfService) {
      errors.qualityOfService = "Obligatorio"
    }
    if (!values.speedOfService) {
      errors.speedOfService = "Obligatorio"
    }
    if (!values.priceOfTheService) {
      errors.priceOfTheService = "Obligatorio"
    }
    if (!values.attentionOfTheService) {
      errors.attentionOfTheService = "Obligatorio"
    }
    if (!values.experienceRating) {
      errors.experienceRating = "Obligatorio"
    }
    if (!values.useful) {
      errors.useful = "Obligatorio"
    }
    if (!values.firstTime) {
      errors.firstTime = "Obligatorio"
    }
    if (!values.aboutUs) {
      errors.aboutUs = "Obligatorio"
    }

    return errors
  }
  const onSubmit = (values) => {
    alert(values)
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
      <br />
      <Formik
        initialValues={initialValues}
        validateOnChange={false}
        validateOnBlur={false}
        validate={validate}
        onSubmit={onSubmit}
      >
        {({ handleSubmit, handleChange }) => (
          <form onSubmit={handleSubmit}>
            <label className="checkbox">
              <input type="checkbox" name="agreedPrice" onChange={handleChange} /> Verificar si el
              precio cobrado de <strong>mano de obra</strong> (no incluye repuestos) fue de{" "}
              <strong>$1200 por hora</strong>
            </label>
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
                  <ReactStars
                    count={5}
                    name="qualityOfService"
                    onChange={handleChange}
                    size={30}
                    activeColor="#ffd700"
                  />
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
            <br />
            <strong>
              Sobre CONSTRUIRTE, valoramos tu opinion por ello te molestamos con una breve encuesta
              sobre nosotros para ayudarnos a seguir mejorando y ser tu primer eleccion
            </strong>
            <div className="rate-modal-2col-grid">
              <div className="h-45px pt-2 " id="experience-rate">
                <p>¿Como calificarias tu experiencia en CONSTRUIRTE?</p>
              </div>
              <div className="h-30px mx-auto">
                <ReactStars count={5} onChange={ratingChanged} size={30} activeColor="#ffd700" />
              </div>
            </div>
            <label className="checkbox">
              <input type="checkbox" /> ¿Te fue util CONSTRUIRTE para encontrar Prestador?
            </label>
            <br />
            <br />
            <label className="checkbox">
              <input type="checkbox" /> ¿Es la primera vez que contratas Prestador a travez de
              CONSTRUIRTE?
            </label>

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
              <div>
                Dejanos tu comentario, opinion o queja sobre la plataforma CONSTRUIRTE (opcional)
              </div>
              <div className="control">
                <textarea className="textarea is-info has-fixed-size"></textarea>
              </div>
            </div>
            <button className="button  polygon-button secondary-color" type="submit">
              Calificar
            </button>
          </form>
        )}
      </Formik>
    </div>
  )
}
export default RateModal
