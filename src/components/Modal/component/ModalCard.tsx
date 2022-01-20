import ProgressBarComponent from "./ProgressBar"

const ModalCard = ({ body }) => {
  return (
    <div className="has-background-wihte">
      {body.map((item, index) => {
        return <ProgressBarComponent desc={item.desc} progress={item.progress} key={index} />
      })}
    </div>
  )
}
export default ModalCard
