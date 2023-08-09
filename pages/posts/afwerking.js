import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import Link from 'next/link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'

export default function Afwerking() {
    return (
        <>
            <div className={styles.container}>
                <Head>
                    <title>Afwerking</title>
                    <meta name="description" content="Generated by create next app" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <main className={styles.main}>
                    <h1 className="title">
                        Afwerking
                    </h1>
                    <div className={styles.divMaxI}>
                        <p>Ik kan het bijna niet geloven...</p>
                        <p>Het einde van mijn project is in zicht! Het rest me alleen nog om verschillende scenario&apos;s uit te testen om nog een laatste keer volledig door de game te gaan, en nog audio-effecten in te steken.</p>
                        <p>Oh, en baked lighting.</p>
                    </div>
                    {/* <p className={styles.description}>
                        Get started by editing{' '}
                        <code className={styles.code}>pages/index.js</code>
                    </p> */}

                    <div className={styles.grid}>
                        <div className={styles.cardLong}>
                            <Image className={styles.cardLongImage} src="/keyss.png" height={175} width={800} />
                            <br></br>
                            <br></br>
                            <h2>Scenario overlopen</h2>
                            <p className={styles.descriptionIdea}>Bugs</p>
                            <p>De volledige verhaallijn is afgewerkt.</p>
                            <p>Na het toevoegen van de laatste C#-scripts om logica in mijn escaperoom te steken, vond ik nog enkele bugs die de verhaallijn een beetje in de war schopten.</p>
                            <p>Dit waren vooral pop-ups van Josh al dan niet op het juiste moment verschenen, maar ook nog een bug waar je de spiegel helemaal niet kan bemachtigen, en dus de escaperoom nooit zal kunnen ontsnappen.</p>
                            <p>Ik had een <span className={styles.codeish}>Box Collider</span> op de schatkist gezet waar de spiegel inzat.</p>
                            <p>De reden hiervoor was (om het kort uit te leggen) dat je spiegel niet kon pakken door met je hand gewoon door de schatkist te gaan.</p>
                            <p>Ik deactiveerde deze Box Collider gewoon als de sleutel in het sleutelgat zat, en daar was helemaal niets mis mee.</p>
                            <p>Maar... als je met een object de schatkist force-opent, zal de Box Collider nooit verdwijnen, en zal je de spiegel nooit kunnen pakken. Dit kreeg ik uiteidelijk wel opgelost.</p>
                            <p className={styles.descriptionIdea}>Baked Lighting</p>
                            <p>Dit is nog een vrij pittig onderwerp.</p>
                            <p>Het is iets dat niet persé nodig is om het project tot stand te laten komen, maar wel iets wat ik nog interessant vond om te doen.</p>
                            <p>Om jullie hier wat uitleg te besparen, heb ik een nieuw artikel aangemaakt, puur over deze <span className={styles.codeish}>Baked Lighting</span>.</p>
                            <p className={styles.descriptionIdea}>Audio</p>
                            <p>Om voor de final-touch van mijn project te zorgen, maakte ik ook gebruik van Audio Clips om dingen zoals een button-click, maar ook achtergrond muziek / geluiden te importeren.</p>
                            <p>Ik maakte vaak gebruik van een <span className={styles.codeish}>Empty GameObject</span> met een component genaamd <span className={styles.codeish}>Audio Source</span>.</p>
                            <Image className={styles.cardLongImage} src="/audioSrc.png" height={175} width={800} />
                            <p>Sleep je audio bestand in &apos;AudioClip&apos;, en je audio zal worden afgespeeld bij het inladen van een scene.</p>
                            <p>In sommige scenario&apos;s maakte ik een script die pas audio afspeelde na een bepaald event.</p>
                            <p>Vink de optie <span className={styles.codeish}>Play On Awake</span> uit als je dit doet.</p>
                            <p>Ook kan je je audioClip op &apos;Loop&apos; zetten als je bijvoorbeeld een blijvend achtergrond geluid hebt.</p>
                        </div>
                    </div>
                    <div className={styles.flexStepButtons}>
                        <Link href="gameover-win"><p className={styles.stepButton}>&larr; previous</p></Link>
                        <Link href="baked-lighting"><p className={styles.stepButton}>next &rarr;</p></Link>
                    </div>
                </main>

                <footer className={styles.footer}>
                    <p>by: Erin Troch</p>
                </footer>
            </div>
        </>
    )
}