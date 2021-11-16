import { useState } from "react"
import { Certificates } from "../component/Certificates"
import { CompanyModalPagination } from "../component/CompanyModalPagination"
import { FeaturedProductos } from "../component/FeaturedProducts"
import { GeneralDescription } from "../component/GeneralDescription"
import { PersonalStory } from "../component/PersonalStory"
import { ProductionCapacity } from "../component/ProductionCapacity"
export const ShopModalCompanyContainer = () => {
  const [page, setPage] = useState(1)

  return (
    <div className="company-modal">
      {page == 1 && <GeneralDescription />}
      {page == 2 && <ProductionCapacity />}
      {page == 3 && <PersonalStory />}
      {page == 4 && <Certificates />}
      {page == 5 && <FeaturedProductos />}
      <CompanyModalPagination page={page} setPage={setPage} />
    </div>
  )
}
