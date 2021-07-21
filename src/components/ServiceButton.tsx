export const ServiceButton = ({
  children: label,
  onClick,
}: {
  children: string
  onClick: () => void
}) => {
  return (
    <div className="service_button-shadow">
      <div className="service_button-border">
        <button className="service_button">{label}</button>
      </div>
    </div>
  )
}

// <button onClick={onClick} className="service_button">
// {children}
// </button>
