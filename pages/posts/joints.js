import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import Link from 'next/link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'

export default function Joints() {
    return (
        <>
            <div className={styles.container}>
                <Head>
                    <title>Joints</title>
                    <meta name="description" content="Generated by create next app" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <main className={styles.main}>
                    <h1 className="title">
                        Joints
                    </h1>
                    <div className={styles.divMaxI}>
                        <p>De basis interacties werken nu perfect! Nu wilde even kijken om te werken met Joints om dingen zoals de deur, kastjes, roer... te laten werken.</p>
                    </div>
                    {/* <p className={styles.description}>
                        Get started by editing{' '}
                        <code className={styles.code}>pages/index.js</code>
                    </p> */}

                    <div className={styles.grid}>
                        <div className={styles.cardLong}>
                            <Image className={styles.cardLongImage} src="/jointLong.png" height={175} width={800} />
                            <br></br>
                            <br></br>
                            <h2>Joints</h2>
                            <p className={styles.descriptionIdea}>Joints</p>
                            <p>In dit onderdeel zal ik meer in detail gaan over het gebruik van Joints in Unity. Joints zijn eigenlijk denkbeeldige scharnierpunten die je toevoegd aan je 3D-model om bepaalde specifieke interacties mogelijk te maken.</p>
                            <p>De models waarop ik deze Joints zal gebruiken zijn: Een deur, een lade, een kluis en een roer.</p>
                        </div>
                    </div>
                    <div className={styles.flexStepButtons}>
                        <Link href="verplaatsen-in-vr"><p className={styles.stepButton}>&larr; previous</p></Link>
                        <Link href="deur-joint"><p className={styles.stepButton}>next &rarr;</p></Link>
                    </div>
                </main>

                <footer className={styles.footer}>
                    <p>by: Erin Troch</p>
                </footer>
            </div>
        </>
    )
}