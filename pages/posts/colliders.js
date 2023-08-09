import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import Link from 'next/link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'

export default function Colliders() {
    return (
        <>
            <div className={styles.container}>
                <Head>
                    <title>Colliders</title>
                    <meta name="description" content="Generated by create next app" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <main className={styles.main}>
                    <h1 className="title">
                        Colliders
                    </h1>
                    <div className={styles.divMaxI}>
                        <p>Het importeren van de models was niet zo veel werk. Wat wel terug heel wat tijd in beslag nam, was het instellen van de boxcolliders op de objecten zodat deze terug juist reageren op elkaar.</p>
                    </div>
                    {/* <p className={styles.description}>
                        Get started by editing{' '}
                        <code className={styles.code}>pages/index.js</code>
                    </p> */}

                    <div className={styles.grid}>
                        <div className={styles.cardLong}>
                            <h2>Instellen van colliders</h2>
                            <p className={styles.descriptionIdea}>Colliders</p>
                            <p>Eerder testte ik deze verschillende colliders als uit op gratis models van Unity. Nu ik mijn eigen models heb moet ik terug een beetje uitzoeken hoe objecten in elkaar zitten.</p>
                            <p>Veel van mijn models hebben inkepingen, holtes of gebogen randen. Een gewone <span className={styles.codeish}>Mesh Collider</span> zal dus in veel van deze gevallen niet werken.</p>
                            <p>Enkele models waarop je wel gemakkelijk een Mesh Collider kan toevoegen zijn bijvoorbeeld de globe, het kompas, de sleutel...</p>
                            <p>Een MeshCollider MOET op een ChildElements worden aangebracht.</p>
                            <p>Bij andere voorwerpen zoals het glasraam, de muur waar de deur staat, de schatkist, de grote kast... moets ik zelf met <span className={styles.codeish}>Box Colliders</span> aan de slag gaan.</p>
                            <p>De beste manier om dit te doen is door Empty GameObjects aan te maken als ChildElement van je model, en dan op deze Empty GameObjects de Box Colliders toe te voegen.</p>
                            <p className={styles.descriptionIdea}>Physics</p>
                            <p>Naast het toevoegen van de colliders zorgde ik ook dat de interacties (zoals het vastnemen van objecten, het gooien, het werken van de zwaartekracht...) ook terug werkten.</p>
                        </div>
                    </div>
                    <div className={styles.flexStepButtons}>
                        <Link href="inladen-in-unity"><p className={styles.stepButton}>&larr; previous</p></Link>
                        <Link href="verplaatsen-in-vr"><p className={styles.stepButton}>next &rarr;</p></Link>
                    </div>
                </main>

                <footer className={styles.footer}>
                    <p>by: Erin Troch</p>
                </footer>
            </div>
        </>
    )
}