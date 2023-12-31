import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import Link from 'next/link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'

export default function BugsObjecten() {
    return (
        <>
            <div className={styles.container}>
                <Head>
                    <title>Bugs - objecten</title>
                    <meta name="description" content="Generated by create next app" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <main className={styles.main}>
                    <h1 className="title">
                        Bugs - objecten
                    </h1>
                    <div className={styles.divMaxI}>
                        <p>Tjah, objecten die door elkaar &apos;glitchen&apos; is nooit aangenaam.</p>
                    </div>
                    {/* <p className={styles.description}>
                        Get started by editing{' '}
                        <code className={styles.code}>pages/index.js</code>
                    </p> */}

                    <div className={styles.grid}>
                        <div className={styles.cardLong}>
                            <Image className={styles.cardLongImage} src="/bugHand.png" height={350} width={800} />
                            <br></br>
                            <br></br>
                            <h2>Bugs - objecten</h2>
                            <p className={styles.descriptionIdea}>De lade</p>
                            <p>Eerder maakten we een lade aan met <span className={styles.codeish}>Joints</span> zodat deze maar in 1 richting open kan.</p>
                            <p>Als je een object vastneemt, kan je het object gooien in de laden, en alles werkt perfect, maar...</p>
                            <p>Als je dat object duwt in de lade, zal de lade volledig beginnen glitchen, omdat dit ook een Collider is natuurlijk.</p>
                            <p>Tot op vandaag heb ik nog steeds geen oplossing gevonden voor dit probleem, buiten het feit dat we de lades NIET als <span className={styles.codeish}>Box Colliders</span> instellen.</p>
                        </div>
                    </div>
                    <div className={styles.flexStepButtons}>
                        <Link href="bugs-handen"><p className={styles.stepButton}>&larr; previous</p></Link>
                        <Link href="startup-scene"><p className={styles.stepButton}>next &rarr;</p></Link>
                    </div>
                </main>

                <footer className={styles.footer}>
                    <p>by: Erin Troch</p>
                </footer>
            </div>
        </>
    )
}