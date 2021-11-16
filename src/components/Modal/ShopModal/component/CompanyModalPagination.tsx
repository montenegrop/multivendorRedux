export const CompanyModalPagination = ({ setPage, page }) => {
  const PageSelect = (id: number) => {
    return page == id
  }
  return (
    <div className="company-modal-grid-5col">
      <div
        role="button"
        tabIndex={0}
        aria-hidden="true"
        onKeyDown={() => setPage(1)}
        id="1"
        onClick={() => setPage(1)}
        className={`${PageSelect(1) && "bg-primary"}`}
      >
        <p className="mx-auto has-text-centered">Descripcion General</p>
      </div>
      <div
        role="button"
        tabIndex={0}
        aria-hidden="true"
        onKeyDown={() => setPage(2)}
        id="2"
        onClick={() => setPage(2)}
        className={`${PageSelect(2) && "bg-primary"}`}
      >
        <p className="mx-auto has-text-centered">Capacidad Productiva</p>
      </div>
      <div
        role="button"
        tabIndex={0}
        aria-hidden="true"
        onKeyDown={() => setPage(3)}
        id="3"
        onClick={() => setPage(3)}
        className={`${PageSelect(3) && "bg-primary"}`}
      >
        <p className="mx-auto has-text-centered">Historia</p>
      </div>
      <div
        role="button"
        tabIndex={0}
        aria-hidden="true"
        onKeyDown={() => setPage(4)}
        id="4"
        onClick={() => setPage(4)}
        className={`${PageSelect(4) && "bg-primary"}`}
      >
        <p className="mx-auto has-text-centered">Certificados</p>
      </div>
      <div
        role="button"
        tabIndex={0}
        aria-hidden="true"
        onKeyDown={() => setPage(5)}
        id="5"
        onClick={() => setPage(5)}
        className={`${PageSelect(5) && "bg-primary"}`}
      >
        <p className="mx-auto has-text-centered">Productos Destacados</p>
      </div>
    </div>
  )
}
