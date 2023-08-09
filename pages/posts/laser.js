import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import Link from 'next/link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'

export default function Laser() {
    return (
        <>
            <div className={styles.container}>
                <Head>
                    <title>Laser</title>
                    <meta name="description" content="Generated by create next app" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <main className={styles.main}>
                    <h1 className="title">
                        Laser
                    </h1>
                    <div className={styles.divMaxI}>
                        <p>De volgende opdracht (en in de verhaallijn ook de laatste) waarover ik het zal hebben is de laser.</p>
                        <p>De laser wordt geactiveerd nadat je de keycard uit de kluis haalt, en hem in het bakje in het systeem steekt.</p>
                    </div>
                    {/* <p className={styles.description}>
                        Get started by editing{' '}
                        <code className={styles.code}>pages/index.js</code>
                    </p> */}

                    <div className={styles.grid}>
                        <div className={styles.cardLong}>
                            <Image className={styles.cardLongImage} src="/laserBeam.png" height={350} width={800} />
                            <br></br>
                            <br></br>
                            <h2>De Laser</h2>
                            <p className={styles.descriptionIdea}>script</p>
                            <p>De laser wordt eigenlijk aangemaakt via een combinatie van scripts.</p>
                            <p>Eerst maken we een <span className={styles.codeish}>3D-cube</span> aan waarop we ons eerste laserscript zullen toepassen.</p>
                            <p>Deze Cube mag eenderwaar in je scene staan. Dit hoeft niet persé een ChildElement te zijn van je laser Emitter, want de cube zal de Emitter worden.</p>
                            <p>In dit eerste script zorgen we ervoor dat de laser iedere frame zal updaten. Aangezien we straks met reflectie werken, zal er iedere frame eigenlijk een nieuwe laser gemaakt worden, en moet de vorige laser dus worden verwijderd.</p>
                            <p>Deze scripts staan (net zoals alle andere scripts) op <a className={styles.codeish} target="_blank" rel="noopener noreferrer" href="https://github.com/Eerke2001/PersonalPassionProject">https://github.com/Eerke2001/PersonalPassionProject.</a></p>
                            <p>Hier schreef ik ook de logica achter de laser zoals wanneer deze precies geactiveerd moet worden, of terug moet uitgeschakeld worden.</p>
                            <p>Voor het tweede script maken we de laser zelf.</p>
                            <p>Hier werken we met een <span className={styles.codeish}>Line Renderer</span>.</p>
                            <p>In hoofdzaak zal de laser vertrekken vanuit onze 3D-cube, en colliden of stoppen met alles dat een Box-collider als component heeft.</p>
                            <p>Natuurlijk moet dit anders zijn voor onze spiegel, en moet de laser weerkaatsen na het aanraken van de spiegel.</p>
                            <p>Geef je spiegel een nieuwe tag via <span className={styles.codeish}>Tag</span> &rarr; <span className={styles.codeish}>Add Tag</span>.</p>
                            <p>Dan kijken we in het script naar de tag van de colliders. Als het object waarmee de laser collide de tag &apos;Spiegel&apos; heeft, zal de laser via een Reflect-functie verder worden gerenderd.</p>
                            <Image className={styles.cardLongImage} src="/laserBeamRefl.png" height={350} width={800} />
                            <p>Tot slot moeten we nog een laser-ontvanger maken die het kanon tevoorschijn laat komen.</p>
                            <p>Deze laserontvanger zal terug een nieuw script toegekend krijgen waar we opnieuw gaan kijken naar een tag.</p>
                            <p>Op de laserontvanger zetten we terug een nieuwe <span className={styles.codeish}>3D-Sphere</span> of <span className={styles.codeish}>3D-Cube</span> met de tag &apos;Receive&apos;.</p>
                            <p>In het script kijken we dan zal de laser een object met de tag &apos;Receive&apos; raakt, en voeren we het script uit die het kanon zal later verschijnen.</p>
                            <p>Ook wilde ik dat de laser terug ge-deactiveerd werd 1 seconde na het onvangen van de laser. Daarvoor maakte ik enkele Bools aan die gekoppeld stonden aan verschillende scripts van de laser. Omdat er vaak communicatie nodig is tussen deze script zal je zien dat ik datzelfde systeem vaak opnieuw heb gebruikt.</p>
                            <p className={styles.descriptionIdea}>Keycard</p>
                            <p>Om de laser pas te activeren werk ik dus met een Bool-Systeem die true of false zal doorgeven naar een ander script.</p>
                            <p>Als de keycard in de socket van mijn laser-bakje terechtkomt, stuur ik dus een signaal dat de laser mag geactiveerd worden.</p>
                            <Image className={styles.cardLongImage} src="/laserBakje.png" height={175} width={800} />
                        </div>
                    </div>
                    <div className={styles.flexStepButtons}>
                        <Link href="kluis"><p className={styles.stepButton}>&larr; previous</p></Link>
                        <Link href="sleutels"><p className={styles.stepButton}>next &rarr;</p></Link>
                    </div>
                </main>

                <footer className={styles.footer}>
                    <p>by: Erin Troch</p>
                </footer>
            </div>
        </>
    )
}