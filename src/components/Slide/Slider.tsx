import React, { useState } from "react"

const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0)
  const length = slides.length

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null
  }

  return (
    <>
      <section className="slider">
        <button className="slider_left-arrow" onClick={prevSlide} onKeyDown={prevSlide}>
          &#60;
        </button>
        <button className="slider_right-arrow" onClick={nextSlide} onKeyDown={prevSlide}>
          &#62;
        </button>
        {slides.map((slide, index) => {
          return (
            <div className={index === current ? "slide active" : "slide"} key={index}>
              {index === current && (
                <img src={slide.image} alt="construirte" className="slider_image" />
              )}
            </div>
          )
        })}
      </section>
    </>
  )
}

export default Slider
