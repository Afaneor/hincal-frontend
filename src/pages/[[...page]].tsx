import DefaultErrorPage from 'next/error'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'

// Define the Page component
export default function Page({ page }: any) {
  const router = useRouter()

  // If the page is still being generated,
  // show a loading message
  if (router.isFallback) {
    return <h1>Loading...</h1>
  }

  // If the page content is not available
  // and not in preview mode, show a 404 error page
  if (!page) {
    return <DefaultErrorPage statusCode={404} />
  }

  // If the page content is available, render
  // the BuilderComponent with the page content
  return (
    <Head>
      <title>{page?.data.title}</title>
    </Head>
  )
}
