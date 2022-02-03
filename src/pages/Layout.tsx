import { useRouter } from "next/router"
import React from "react"
import Footer from "../components/footer"
import Navbar from "../components/Navbar/Navbar"
import Slider from "../components/Slide/Slider"

const SliderData = [
  {
    image: "https://segurarse.com.ar/blog/wp-content/uploads/2020/04/Seguro-Art-02.png",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp0XmvdS7H3PsuBTjiEXd3I-XMb1JKtOjJlg&usqp=CAU",
  },
  {
    image:
      "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
  },
  {
    image:
      "https://images.unsplash.com/photo-1475189778702-5ec9941484ae?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80",
  },
  {
    image:
      "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
  },
]

const Layout = ({ children }) => {
  const router = useRouter()
  return (
    <>
      <Navbar />
      {router.pathname === "/" && <Slider slides={SliderData} />}
      <main className="content">{children}</main>
      <Footer />
    </>
  )
}
export default Layout
