import ProgressBar from "./ProgressBar"

const ModalCard = ({ id, title, body }) => {
  return (
    <div className="modal_card">
      <div className="modal_header">
        <div className="modal_title">
          <h1>{title}</h1>
        </div>
      </div>
      <div className="modal_body">
        {body.map((item, index) => {
          return (
            <ProgressBar
              desc={item.desc}
              progress={item.progress}
              id={id}
              index={index}
              key={index}
            />
          )
        })}
      </div>
    </div>
  )
}
export default ModalCard
