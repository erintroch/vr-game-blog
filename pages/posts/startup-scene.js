import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import Link from 'next/link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'

export default function StartUpScene() {
    return (
        <>
            <div className={styles.container}>
                <Head>
                    <title>Start-up Scene</title>
                    <meta name="description" content="Generated by create next app" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <main className={styles.main}>
                    <h1 className="title">
                        Start-up Scene
                    </h1>
                    <div className={styles.divMaxI}>
                        <p>Iedere game begint met een soort van Start-Up Scene, en dat is exact wat ik nu ook zal maken voor de Escaperoom.</p>
                        <p>In dit onderdeel zal ik wat meer uitleg geven over het overschakelen van de ene Scene naar de andere.</p>
                    </div>
                    {/* <p className={styles.description}>
                        Get started by editing{' '}
                        <code className={styles.code}>pages/index.js</code>
                    </p> */}

                    <div className={styles.grid}>
                        <div className={styles.cardLong}>
                            <Image className={styles.cardLongImage} src="/startup-scene.png" height={350} width={800} />
                            <br></br>
                            <br></br>
                            <h2>Start-up Scene</h2>
                            <p className={styles.descriptionIdea}>De omgeving</p>
                            <p>De start-scene zullen we in een nieuwe scene maken. Ga naar je &apos;scenes&apos; mapje, en maak een nieuwe scene aan via <span className={styles.codeish}>Create</span> &rarr; <span className={styles.codeish}>Scene</span>, of dupliceer je vorige scene.</p>
                            <p>Verwijder of voeg alle elementen toe die je in je start-scene wilt tonen aan de gebruiker.</p>
                            <p>Om een interessante Start-up Scene te maken besloot ik om de speler in de oceaan te laten starten, en eigenlijk al eens de mogelijkheid geven om zich in de onderwaterwereld onder te dompelen.</p>
                            <p>Ik kopiëerde de oceaan die ik eerder maakte voor mijn boot, maar zorgde er nu voor de speler omsingeld was door koralen en rotsen.</p>
                            <p>In het midden van de oceaan staat de XR-rig (dus ook de plaats waar de speler zal starten).</p>
                            <p>Nu is het tijd om een start paneel te maken.</p>
                            <p className={styles.descriptionIdea}>Start paneel maken</p>
                            <p>Maak om te beginnen een nieuw 3D-object aan in je scene via <span className={styles.codeish}>3D-object</span> &rarr; <span className={styles.codeish}>Cube</span>, en zorg ervoor dat deze cube de grootte en dikte heeft van je start-paneel dat jij wilt vormgeven.</p>
                            <p>Vervolgens maak je een nieuwe canvas met daarbinnen een Image aan via <span className={styles.codeish}>UI</span> &rarr; <span className={styles.codeish}>Image</span>, en scale deze tot je hem mooi op je 3D-cube hebt geplaatst.</p>
                            <p>Je kan je 3D-cube al een textuur geven als je dat wilt. Ik koos voor een hout-structuur.</p>
                            <span className={styles.extra}>Goed om te weten:</span>
                            <p>Op je Image component zelf koos ik voor een afbeelding die wat meer uitleg gaf over de controls van het spel. Zo weet de gebruiker al een beetje wat ze precies kunnen doen.</p>
                            <p>Binnen deze canvas maakte ik nog een <span className={styles.codeish}>Button - Text Mesh Pro</span> aan om de effectieve start-knop te hebben.</p>
                            <p>Aan veel UI-elementen kan je een <span className={styles.codeish}>Sprite</span> toekennen. Ga op je UI-element staan, en dan zie je de optie:</p>
                            <Image className={styles.cardLongImage} src="/sprite-ui.png" height={175} width={800} />
                            <p>Hierin kan je dus een afbeelding slepen, maar het is belangrijk dat deze afbeelding van het type <span className={styles.codeish}>Sprite (2D and UI)</span> is. Je kan deze type aanpassen als je klikt op je geïmporteerde afbeelding.</p>
                            <Image className={styles.cardLongImage} src="/sprite-ui-img.png" height={175} width={800} />
                            <p className={styles.descriptionIdea}>Start-knop</p>
                            <p>Het laatste wat ons nog echt tedoen staat is om de start-knop te laten werken.</p>
                            <p>Om dit te doen zullen we weer een script maken in C# om de overgang van scene naar scene te triggeren, met een vloeiende overgang.</p>
                            <p>Het script lijkt een beetje op het script dat we maakten om een zwart-scherm te tonen aan de gebruiker als hij met zijn hoofd in de muur zit.</p>
                            <p>Als je het script maakt, zorg dan zeker dat de <span className={styles.codeish}>Unity.SceneManager</span> & <span className={styles.codeish}>UIManager</span> worden geïmporteerd in het begin van je script.</p>
                            <p>Iedere scene heeft een index. Via die index zullen we de scene kunnen aanspreken. Om te weten welke index je scenes hebben, ga je naar <span className={styles.codeish}>File</span> &rarr; <span className={styles.codeish}>Build Settings</span>.</p>
                            <Image className={styles.cardLongImage} src="/scenes-manage.png" height={175} width={800} />
                            <p>Als je start-scene nog niet in je build settings zit, klik je op de <span className={styles.codeish}>Add Open Scene</span>, en zal je scene verschijnen in de Build Settings.</p>
                            <p>Daar zie je ook nog eens je Index staan van je scenes.</p>
                        </div>
                    </div>
                    <div className={styles.flexStepButtons}>
                        <Link href="bugs-objecten"><p className={styles.stepButton}>&larr; previous</p></Link>
                        <Link href="tussen-scene"><p className={styles.stepButton}>next &rarr;</p></Link>
                    </div>
                </main>

                <footer className={styles.footer}>
                    <p>by: Erin Troch</p>
                </footer>
            </div>
        </>
    )
}