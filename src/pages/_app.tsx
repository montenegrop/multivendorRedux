import * as React from "react"
import { Provider } from "react-redux"
import type { AppProps, AppContext } from "next/app"
import { getOrCreateStore } from "../state/store"
import { EnhancedStore } from "@reduxjs/toolkit"
import Head from "next/head"

function MyApp({
  Component,
  pageProps,
  initialReduxState,
}: AppProps & { initialReduxState: EnhancedStore }): JSX.Element {
  const reduxStore = getOrCreateStore(initialReduxState)
  return (
    <Provider store={reduxStore}>
      <Head>
        <title>Lockbox Container Home</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Abel" />
      </Head>
      <Component {...pageProps} />
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
