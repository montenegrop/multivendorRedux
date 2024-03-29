import { Formik } from "formik"
const FormContent = ({ handleChange, handleSubmit, isSubmitting, errors }) => {
  return (
    <form onSubmit={handleSubmit} className="mx-5 px-5">
      <div className="rate-modal-2col-grid mb-3">
        <div>
          <p className="my-auto">
            Verificar si el precio cobrado de <strong>mano de obra</strong> (no incluye repuestos)
            fue de <strong>$1200 por hora*</strong>
          </p>
          {errors.agreedPrice && <p className="has-text-danger error">Eliga una opcion</p>}
        </div>

        <div className="mx-auto select">
          <select name="agreedPrice" onChange={handleChange} onBlur={null}>
            <option></option>
            <option>SI</option>
            <option>NO</option>
          </select>
        </div>
      </div>

      <div>
        <div className="rate-modal-2col-grid mb-3">
          <div>
            <p className="my-auto">
              <strong>CALIDAD </strong>
              del servicio
            </p>
            {errors.qualityOfService && <p className="has-text-danger error">Eliga una opcion</p>}
          </div>
          <div className="mx-auto select">
            <select name="qualityOfService" onChange={handleChange} onBlur={null}>
              <option></option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
        </div>

        <div className="rate-modal-2col-grid mb-3">
          <div>
            <p className="my-auto">
              <strong>VELOCIDAD </strong>del servicio
            </p>
            {errors.speedOfService && <p className="has-text-danger error">Eliga una opcion</p>}
          </div>
          <div className="mx-auto select">
            <select name="speedOfService" onChange={handleChange} onBlur={null}>
              <option></option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
        </div>
        <div className="rate-modal-2col-grid mb-3">
          <div>
            <p className="my-auto">
              <strong>PRECIO </strong>del servicio
              {errors.priceOfTheService && (
                <p className="has-text-danger error">Eliga una opcion</p>
              )}
            </p>
          </div>
          <div className="mx-auto select">
            <select name="priceOfTheService" onChange={handleChange} onBlur={null}>
              <option></option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
        </div>
        <div className="rate-modal-2col-grid mb-3">
          <div>
            <p className="my-auto">
              <strong>ATENCION </strong>del servicio
              {errors.attentionOfTheService && (
                <p className="has-text-danger error">Eliga una opcion</p>
              )}
            </p>
          </div>
          <div className="mx-auto select">
            <select name="attentionOfTheService" onChange={handleChange} onBlur={null}>
              <option></option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
        </div>
      </div>

      <div className="rate-modal-2col-grid mb-3">
        <div className="my-auto pr-2">
          <p>Dejanos tu comentario, opinion o queja acerca del prestador (opcional)</p>
        </div>
        <div className="control">
          <textarea name="commentAboutTheLender" className="textarea is-info has-fixed-size" />
        </div>
      </div>
      <br />
      <strong>
        Sobre CONSTRUIRTE, valoramos tu opinion por ello te molestamos con una breve encuesta sobre
        nosotros para ayudarnos a seguir mejorando y ser tu primer eleccion
      </strong>
      <div className="rate-modal-2col-grid mb-3">
        <div className="pt-2" id="experience-rate">
          <p className="my-auto">¿Como calificarias tu experiencia en CONSTRUIRTE?</p>
          {errors.experienceRating && <p className="has-text-danger error">Eliga una opcion</p>}
        </div>

        <div className="mx-auto select">
          <select name="experienceRating" onChange={handleChange} onBlur={null}>
            <option></option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
      </div>
      <div className="rate-modal-2col-grid mb-3">
        <div className="pt-2" id="experience-rate">
          <p className="my-auto">¿Te fue util CONSTRUIRTE para encontrar Prestador?</p>
          {errors.useful && <p className="has-text-danger error">Eliga una opcion</p>}
        </div>
        <div className="mx-auto select">
          <select name="useful" onChange={handleChange} onBlur={null}>
            <option></option>
            <option>SI</option>
            <option>NO</option>
          </select>
        </div>
      </div>
      <div className="rate-modal-2col-grid mb-3">
        <div className="pt-2" id="experience-rate">
          <p className="my-auto">
            ¿Es la primera vez que contratas Prestador a travez de CONSTRUIRTE?
          </p>
          {errors.firstTime && <p className="has-text-danger error">Eliga una opcion</p>}
        </div>
        <div className="mx-auto select">
          <select name="firstTime" onChange={handleChange} onBlur={null}>
            <option></option>
            <option>SI</option>
            <option>NO</option>
          </select>
        </div>
      </div>

      <div className="rate-modal-2col-grid mb-3">
        <div className="pt-2" id="experience-rate">
          <p className="my-auto">¿Como te enteraste de nosotros?</p>
          {errors.aboutUs && <p className="has-text-danger error">Eliga una opcion</p>}
        </div>

        <div className="is-flex is-justify-content-center">
          <div className="select ">
            <select name="aboutUs" onChange={handleChange} onBlur={null}>
              <option></option>
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
      <div className="rate-modal-2col-grid mb-3">
        <p className="pr-2">
          Dejanos tu comentario, opinion o queja sobre la plataforma CONSTRUIRTE (opcional)
        </p>
        <div className="control">
          <textarea
            name="commentAboutTheConstruirte"
            className="textarea is-info has-fixed-size"
          ></textarea>
        </div>
      </div>
      <button
        className="button polygon-button secondary-color"
        type="submit"
        disabled={isSubmitting}
      >
        Calificar
      </button>
    </form>
  )
}

const RateModal = () => {
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
    if (!values.useful) {
      errors.useful = "Obligatorio"
    }
    if (!values.firstTime) {
      errors.firstTime = "Obligatorio"
    }
    if (!values.experienceRating) {
      errors.experienceRating = "Obligatorio"
    }
    if (!values.aboutUs) {
      errors.aboutUs = "Obligatorio"
    }

    return errors
  }
  const onSubmit = (values) => {
    console.log(values)
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
        {(props) => <FormContent {...props} />}
      </Formik>
    </div>
  )
}
export default RateModal
