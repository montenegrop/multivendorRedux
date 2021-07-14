import Head from "next/head"
import { useDispatch, useSelector } from "react-redux"
import { INCREMENT } from "../state/actions/count"
import { RootState } from "../state/reducers"
import styles from "../styles/Home.module.scss"

export default function Home() {
  const dispatch = useDispatch()
  const onClick = () => {
    dispatch(INCREMENT({ name: "pablo" }))
  }
  const count = useSelector<RootState>((state) => state.count)
  return <button onClick={onClick}>contador{count}</button>
}
