import type { NextPage } from 'next'
import React from 'react'
import Image from 'next/image';
import Head from 'next/head';

import style from './style.module.scss';

import Header from './components/Header'

import img from '../../public/Pc Image.png';




const Home: NextPage = () => {
  return (
    <>
    <Head>
      <title>marciordj</title>
    </Head>
    <Header />

    <main className={style.container}>
      <div className={style.contentContainer}>
        <section className={style.text}>
          <h3>Seja bem vindo</h3>

          <h2>Me chamo Márcio Rodrigues e trabalho com Front-end :)</h2>

          <p>Atualmente trabalho com React Native no front, Nestjs no backend, banco de dados SQL e NoSQL</p>        
        </section>

      <Image src={img} alt="teste" className={style.img}/>
      </div>
    </main>
    </>
  )
}

export default Home
