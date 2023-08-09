import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import Link from 'next/link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'

export default function XrRig() {
    return (
        <>
            <div className={styles.container}>
                <Head>
                    <title>XR-rig</title>
                    <meta name="description" content="Generated by create next app" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <main className={styles.main}>
                    <h1 className="title">
                        XR-rig
                    </h1>
                    <div className={styles.divMaxI}>
                        <p>Een van de belangrijkste elementen van ons VR-project zal de XR-rig zijn. Deze XR-rig controlleerd ons hoofd, onze handen en dus alle interacties die hieraan verbonden staan. Op de plaats waar de XR-rig staat, zal dus de speler ook spawnen in het begin.</p>
                        <p>Als je ook al even hebt geëxperimenteerd met de tutorials van Unity en hun startproject, mag je deze stap eigenlijk overslaan.</p>
                        <p>Hier zal ik wat meer uitleg geven op de XR-rig / XR-components.</p>
                    </div>
                    {/* <p className={styles.description}>
                        Get started by editing{' '}
                        <code className={styles.code}>pages/index.js</code>
                    </p> */}

                    <div className={styles.grid}>
                        <div className={styles.cardLong}>
                            <h2>XR-rig</h2>
                            <p className={styles.descriptionIdea}>Structuur</p>
                            <p>In het algemeen zal deze XR-rig opgesteld zijn uit een camera & je handen.</p>
                            <p>Een XR-rig bevat enkele componenten, waarvan de meeste scripts zijn.</p>
                            <p>Zo zal het XRRig-Script bevestigd zijn aan het basis-object van de XR-rig, en zal die de waarden bijhouden die via Locomotion kunnen aangepast worden.</p>
                            <p>Het XRRig-Script zal onderandere berekenen dat je hoofd op de juiste hoogte boven de vloer zit, zal zorgen voor de tracking van je hoofd binnen je project, en zal de positie van de camera updaten binnen je project.</p>
                            <p>In komende onderdeeltjes zal ik nog iets meer in detail gaan over de camera en de handen.</p>
                        </div>
                    </div>
                    <div className={styles.flexStepButtons}>
                        <Link href="de-eerste-preview"><p className={styles.stepButton}>&larr; previous</p></Link>
                        <Link href="xr-camera"><p className={styles.stepButton}>next &rarr;</p></Link>
                    </div>
                </main>

                <footer className={styles.footer}>
                    <p>by: Erin Troch</p>
                </footer>
            </div>
        </>
    )
}