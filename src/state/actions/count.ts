import { createAction } from "@reduxjs/toolkit"

export const INCREMENT = createAction<{ name: string }>("INCREMENT")
