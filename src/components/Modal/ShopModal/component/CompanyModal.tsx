import { CompanyModalPagination } from "./CompanyModalPagination"

export const CompanyModal = ({ setPage, page }) => {
  return (
    <div className="company-modal">
      <div>
        <h1 className="is-size-2">Descripcion General</h1>
        <p className="is-size-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque nihil saepe impedit odio
          est minus maiores harum, iure quae perspiciatis officiis fuga pariatur! Distinctio tempore
          tenetur nobis iure nemo reprehenderit?
        </p>
      </div>
      <div className="company-modal-grid-3col mt-5">
        <img
          src="/images/cancelImage.png"
          alt="cancel"
          className="mx-auto is-clickable image is-128x128"
        />
        <img
          src="/images/cancelImage.png"
          alt="cancel"
          className="mx-auto is-clickable image is-128x128"
        />
        <img
          src="/images/cancelImage.png"
          alt="cancel"
          className="mx-auto is-clickable image is-128x128"
        />
      </div>
      <div className="company-modal-pagination">
        <CompanyModalPagination page={page} setPage={setPage} />
      </div>
    </div>
  )
}
