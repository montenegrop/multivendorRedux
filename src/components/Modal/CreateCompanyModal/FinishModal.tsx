import { useRouter } from "next/router"
export const FinishModal = () => {
  const router = useRouter()
  setTimeout(() => {
    router.push("/")
  }, 5000)
  return (
    <div
      className="has-text-centered px-5 is-flex is-flex-direction-column is-justify-content-center"
      style={{ height: "100%" }}
    >
      <div>
        <p className="is-size-4 has-text-grey ">
          ¡Listo! Tus datos han sido cargados correctamente.
        </p>
        <br />
        <p className="is-size-4 has-text-grey ">
          Revisa en tu casilla de email para completar alta de cuenta
        </p>
        <div className="mx-auto succes-rectangle mt-6"></div>
      </div>
    </div>
  )
}
