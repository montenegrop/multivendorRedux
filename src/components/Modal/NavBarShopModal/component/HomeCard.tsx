export const HomeCard = ({ data }) => {
  return (
    <div className="is-flex is-flex-direction-column low-shadow has-background-white p-0">
      <header className="p-3">
        <strong>{data.title}</strong>
      </header>
      <hr className="m-0" />
      <section className="is-flex mt-5">
        <div className="w-50per p-3">
          <strong className="is-uppercase fw-700 ">{data.text}</strong>
        </div>
        <img
          src="./images/homeCardBackground.png"
          alt="home-card-background"
          width="50%"
          height="100%"
        />
      </section>
      <footer className="is-flex is-justify-content-space-between p-2 mt-2 ">
        <p className="has-text-grey is-size-7">{data.subText}</p>
        <button
          className="button is-small my-auto secondary-color"
          disabled={data.button == "off" && true}
        >
          {data.title}
        </button>
      </footer>
    </div>
  )
}
