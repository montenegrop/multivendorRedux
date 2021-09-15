import * as React from "react"
import { Provider } from "react-redux"
import type { AppProps, AppContext } from "next/app"
import { getOrCreateStore } from "../state/store"
import { EnhancedStore } from "@reduxjs/toolkit"
import Head from "next/head"
import "../styles/main.scss"
import Layout from "./Layout"
import { PersistGate } from "redux-persist/integration/react"
import { persistStore } from "redux-persist"

function MyApp({
  Component,
  pageProps,
  initialReduxState,
}: AppProps & { initialReduxState: EnhancedStore }): JSX.Element {
  const reduxStore = getOrCreateStore(initialReduxState)
  const persistor = persistStore(reduxStore)
  return (
    <Provider store={reduxStore}>
      <PersistGate loading={null} persistor={persistor}>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PersistGate>
    </Provider>
  )
}

MyApp.getInitialProps = async ({ Component, ctx }: AppContext) => {
  let pageProps = {}

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx)
  }

  return {
    pageProps,
    initialReduxState: getOrCreateStore().getState(),
  }
}

export default MyApp
