import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import Link from 'next/link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'

export default function ExperimenteleFuncties() {
    return (
        <>
            <div className={styles.container}>
                <Head>
                    <title>Developer-mode</title>
                    <meta name="description" content="Generated by create next app" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <main className={styles.main}>
                    <h1 className="title">
                        Developer-mode
                    </h1>
                    <div className={styles.divMaxI}>
                        <p>Zelf een project maken op je headset is uiteraard niet iets alledaags. De meeste mensen kopen een VR-headset om er mee te spelen, niet om er voor te ontwikkelen.</p>
                        <p>Eerst zocht ik uit als het wel mogelijk was om op de Oculus Quest 2 te developen. Dit is mogelijk als je om te beginnen de experimentele funtie &apos;developer-mode&apos; inschakelt op je VR-headset.</p>
                    </div>
                    {/* <p className={styles.description}>
                        Get started by editing{' '}
                        <code className={styles.code}>pages/index.js</code>
                    </p> */}

                    <div className={styles.grid}>
                        <div className={styles.cardLong}>
                            <Image className={styles.cardLongImage} src="/experimentele-functiesLong.png" height={175} width={800} />
                            <br></br>
                            <br></br>
                            <h2>Oculus & Unity</h2>
                            <p className={styles.descriptionIdea}>Uitvoering</p>
                            <p>Om de developer-mode in te schakelen moet je in je headset gaan naar <span className={styles.codeish}>snelle instellingen</span> &rarr; <span className={styles.codeish}>instellingen</span> &rarr; <span className={styles.codeish}>experimentele functies</span> &rarr; <span className={styles.codeish}>developer-mode</span></p>
                            <p>Als deze functie nergens te vinden is, zal je net zoals mij nog een developer account moeten aanvragen bij Oculus. Dit leg ik uit in de volgende stap.</p>
                            <p className={styles.descriptionIdea}>Oculus App</p>
                            <p>Als je je VR-headset nog nooit hebt gekoppeld met je IPad, IPhone, Mac of computer zal je de Oculus App nog moeten installeren.</p>
                            <p>Via windows is dit iets anders dan bij Apple.</p>
                            <p>Via windows kan je via oculus.com/setup/ de <span className={styles.codeish}>QUEST 2-APP</span> downloaden.</p>
                            <p>Deze app zal ervoor zorgen dat je je VR-headset kan verbinden met je PC, en ook Oculus Link mogelijk maakt.</p>
                            <p>Naast deze app heb je ook nog een mobile versie nodig van de app op je IPhone, IPad of eender welk Android aparaat.</p>
                            <p>Op Apple producten zal je de zelfde app kunnen downloaden in de App Store.</p>
                            <p>Mochten er problemen opduiken, staat er nog een uitgebreidere versie een beetje later in mijn blog.</p>
                            <p className={styles.descriptionIdea}>Developer mode</p>
                            <p>Ook in deze apps zal je via <span className={styles.codeish}>Instellingen</span> &rarr; <span className={styles.codeish}>Developer</span> de developers-mode moeten activeren.</p>
                            <p>Zorg ervoor dat je via je Oculus account of Facebook account de headset koppelt aan de app, anders zal dit niet werken.</p>
                        </div>
                    </div>
                    <div className={styles.flexStepButtons}>
                        <Link href="start-in-vr"><p className={styles.stepButton}>&larr; previous</p></Link>
                        <Link href="developer-account"><p className={styles.stepButton}>next &rarr;</p></Link>
                    </div>
                </main>

                <footer className={styles.footer}>
                    <p>by: Erin Troch</p>
                </footer>
            </div>
        </>
    )
}