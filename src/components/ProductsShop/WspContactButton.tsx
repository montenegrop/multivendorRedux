import WhatsAppIcon from "../Icons/WhatsAppIcon"
import Link from "next/link"
const WspContactButton = () => {
  return (
    <Link href="https://api.whatsapp.com/send?phone=+5493416756337&text=Me gustaria conseguir informacion para realizar una compra">
      <div className="wsp-contact-button has-text-right">
        <p className="">Ponete en contacto</p>
        <WhatsAppIcon />
      </div>
    </Link>
  )
}
export default WspContactButton
