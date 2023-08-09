import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import Link from 'next/link'

export default function FirstPost() {
    return (
        <>
            <div className={styles.container}>
                <Head>
                    <title>Eerste ideetjes</title>
                    <meta name="description" content="Generated by create next app" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <main className={styles.main}>
                    <h1 className="title">
                        Eerste ideetjes
                    </h1>
                    <div className={styles.divMaxI}>
                        <p>Na het krijgen van onze opdracht begon ik met een brainstorm te maken. Ik had enkele ideetjes in gedachten, en besloot om enkele al eens voor te leggen op consult.</p>
                    </div>
                    {/* <p className={styles.description}>
                        Get started by editing{' '}
                        <code className={styles.code}>pages/index.js</code>
                    </p> */}

                    <div className={styles.grid}>
                        <div className={styles.cardLong}>
                            <h2>Out in space</h2>
                            <p className={styles.descriptionIdea}>Beschrijving</p>
                            <p>Ruimte, iedereen kan zijn eigen planeet toevoegen op een ‘website’ met three.js. Die planeten kan je volledig personaliseren door verschillende parameters aan te passen. Je kan de planeten van alle verschillende personen bezoeken. Met behulp van AI kan je die eigen planeet maken. Je geeft verschillende keywoorden in, en aan de hand van die woorden wordt er een planeet voor jou gemaakt die je dan op je scherm tezien krijgt.</p>
                            <p className={styles.descriptionIdea}>Werkpunten</p>
                            <ul>
                                <li>Sfeer belangrijk, wat is next?</li>
                                <li>Waarom zou je een planeet willen maken?</li>
                                <li>Wat kan je ermee doen?</li>
                            </ul>
                        </div>
                        <div className={styles.cardLong}>
                            <h2>VR-story</h2>
                            <p className={styles.descriptionIdea}>Beschrijving</p>
                            <p>Verhaal maken aan de hand van een VR-experience. De speler zal een soort van film kunnen volgen waarin enkele interactieve dingen zullen gebeuren.</p>
                            <p className={styles.descriptionIdea}>Werkpunten</p>
                            <ul>
                                <li>Wat gebeurt er in het verhaal?</li>
                                <li>Werk het verhaal uit</li>
                                <li>Hoe ga je experimenteren?</li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.flexStepButtons}>
                        <Link href="onderzoeksvraag"><p className={`${styles.stepButton} ${styles.opacDown}`}>&larr; previous</p></Link>
                        <Link href="tijd-voor-experiment"><p className={styles.stepButton}>next &rarr;</p></Link>
                    </div>
                </main>

                <footer className={styles.footer}>
                    <p>by: Erin Troch</p>
                </footer>
            </div>
        </>
    )
}