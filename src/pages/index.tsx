import Head from "next/head"
import { useDispatch, useSelector } from "react-redux"
import { INCREMENT } from "../state/actions/count"
import { SERVICE_PROVIDER_INIT } from "../state/actions/serviceProvider"
import { RootState } from "../state/reducers"

export default function Home() {
  const dispatch = useDispatch()
  const onClick = () => {
    dispatch(SERVICE_PROVIDER_INIT({ id: "VmVuZG9yOjE=" }))
  }
  const name = useSelector<RootState>((state) => state.serviceProvider.name)
  const loading = useSelector<RootState>((state) => state.serviceProvider.loading)
  return (
    <div>
      <button onClick={onClick}>nombre del vendor</button>
      <div className="warning">{name}</div>
      {loading && <div>loading</div>}
    </div>
  )
}
