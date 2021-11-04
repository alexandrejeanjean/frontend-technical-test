import type { FC } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: FC = () => {
  const year = new Date().getFullYear()

  return (
    <div>
      <Head>
        <title>Frontend Technical test - Leboncoin</title>
        <meta
          name='description'
          content='Frontend exercise for developpers who want to join us on leboncoin.fr'
        ></meta>
      </Head>

      <main></main>

      <footer className={styles.footer}>&copy; leboncoin - {year}</footer>
    </div>
  )
}

export default Home
