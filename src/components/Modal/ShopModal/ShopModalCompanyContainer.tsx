import { useState } from "react"
import { CompanyModal } from "./component/CompanyModal"

export const ShopModalCompanyContainer = () => {
  const [page, setPage] = useState(1)

  return <CompanyModal page={page} setPage={setPage} />
}
