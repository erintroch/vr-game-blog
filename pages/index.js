import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Blog Personal Passion Project</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h2>Personal Passion Project - Erin Troch</h2>
        <br></br>
        <Image className={styles.cardLongImage} src="/underwaterBG.png" height={540} width={960} />
      </main>
    </div>
  )
}