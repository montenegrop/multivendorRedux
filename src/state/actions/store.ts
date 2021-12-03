import { createAction } from "@reduxjs/toolkit"
import { Vendor } from "../../generated/graphql"

export type Image = {
  url: string
  alt: string
}

type NameFilterValue = {
  value: string
  state: boolean
}

type NumberFilterValue = {
  min: number
  max: number
  stateMin: boolean
  stateMax: boolean
}

type NameFilter = {
  title: string
  values: NameFilterValue[]
}

type NumberFilter = {
  title: string
  value: NumberFilterValue
}

type Filters = (NameFilter | NumberFilter)[]

export const STORE_INIT = createAction<{ id: string | string[] }>("STORE_INIT")

export const STORE_PRODUCT_INIT = createAction<{ filters: Filters }>("STORE_PRODUCT_INIT")

// export const STORE_FILTERS_INIT = createAction<{ filters: Filters }>("STORE_FILTERS_INIT")

export const STORE_SUCCESS = createAction<Vendor>("STORE_SUCCESS")
export const STORE_ERROR = createAction<string>("STORE_ERROR")
