import type { NextPage } from 'next'
import React from 'react'
import Head from 'next/head';

import Header from './components/Header'


const Home: NextPage = () => {
  return (
    <>
    <Head>
      <title>marciordj</title>
    </Head>
    <Header />
    </>
  )
}

export default Home
