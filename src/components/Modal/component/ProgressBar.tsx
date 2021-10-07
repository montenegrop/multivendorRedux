import { useEffect } from "react"

const ProgressBar = ({ id, index, desc, progress }) => {
  let progress_div: any = []
  useEffect(() => {
    if (progress > 4) {
      progress = 4
    }
    progress_div = document.getElementsByClassName(`${id} ${index}`)
    for (let i = 0; i < progress; i++) {
      progress_div[i].classList.add("succes_progress")
    }
  }, [progress])
  return (
    <>
      <div className="progress_descrp">
        <p>{desc}</p>
      </div>

      <div className="progress_grid">
        <div className={`progress_div left_rectangle ${id} ${index}`}></div>
        <div className={`progress_div ${id} ${index}`}></div>
        <div className={`progress_div ${id} ${index}`}></div>
        <div className={`progress_div right_rectangle ${id} ${index}`}></div>
      </div>
    </>
  )
}
export default ProgressBar
