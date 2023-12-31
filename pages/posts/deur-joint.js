import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import Link from 'next/link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'

export default function DeurJoint() {
    return (
        <>
            <div className={styles.container}>
                <Head>
                    <title>Deur Joint</title>
                    <meta name="description" content="Generated by create next app" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <main className={styles.main}>
                    <h1 className="title">
                        Deur Joint
                    </h1>
                    <div className={styles.divMaxI}>
                        <p>Verschillende objecten gebruiken ook verschillende joints. Om een deur op een juiste manier te laten bewegen, maken we gebruik van een &apos;Hinge Joint&apos;.</p>
                    </div>
                    {/* <p className={styles.description}>
                        Get started by editing{' '}
                        <code className={styles.code}>pages/index.js</code>
                    </p> */}

                    <div className={styles.grid}>
                        <div className={styles.cardLong}>
                            <h2>Joints</h2>
                            <p className={styles.descriptionIdea}>Hinge Joint</p>
                            <p>Om te beginnen klik je op je deur-model. Dan voeg je een Hinge Joint component toe via <span className={styles.codeish}>Add Component</span> &rarr; <span className={styles.codeish}>Hinge Joint</span>.</p>
                            <p>Het lijkt nu als of er niets is gebeurt. Als je Hinge Joint wilt bewerken, klik je op volgend icoontje:</p>
                            <Image className={styles.cardLongImage} src="/hingeJoint.png" height={175} width={800} />
                            <p>Normaal zie je nu een rode cirkel verschijnen op je model. Deze cirkel toont aan hoe de rotatie van de deur zal zijn als je opent.</p>
                            <p>Zet de &apos;Axis&apos; van je Hinge Joint op X:0, Y:1, Z:0 om de juiste rotatie te hebben.</p>
                            <p>Als dit nog nodig is, versleep je de Hinge Joint naar de plaats op je deur waar er normaal een scharnier zou zitten.</p>
                            <p>Een deur kan zelden 360° draaien. Daarom zullen we ook limieten instellen op de Joint. Vink de <span className={styles.codeish}>Use Limits</span> aan, en verplaats zowel het eindpunt als het beginpunt van je Hinge Joint zodat deze overeenkomt met de graden waarin je je deur wilt kunnen openen.</p>
                            <Image className={styles.cardLongImage} src="/jointDeur.png" height={350} width={800} />
                            <p className={styles.descriptionIdea}>Deur vastnemen</p>
                            <p>De volgende stap is om de deur vast te kunnen nemen, en hem effectief te kunnen openen.</p>
                            <p>Om dit te doen, is de truck eigenlijk om niet de klink zelf vast te nemen, maar een onzichtbaar element dat ongeveer even groot is als de klink.</p>
                            <p>Maak eerst een <span className={styles.codeish}>3D-cube</span> ChildElement aan binnen je deur-model. Nu moeten we een fixedJoint toevoegen op dit object, en volgt deze kubus de deur nu perfect.</p>
                            <p>Nu is het al mogelijk om de deur open te doen via deze cube, maar zoals je zult merken is dit echt wat schokkerig.</p>
                            <p>Om dit probleem op te lossen dupliceer je je 3D-cube, en plaats je de kopie van je 3D-cube opnieuw als ChildElement van je originele 3D-cube.</p>
                            <p>Verwijder de FixJoint van je kopie, en zet in je Rigidbody <span className={styles.codeish}>Is Kinematic</span> aan.</p>
                            <p>Voor de laatste stap schreef ik nog 2 scripts zodat de 2 cubes elkaar vloeiend konden volgen met een beetje speling op.</p>
                            <p>In deze video van Valem wordt dit nog iets meer in detail uitgelegd: <span className={styles.codeish}><a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=3cJ_uq1m-dg">How-to-make-a-door-in-VR</a></span></p>
                        </div>
                    </div>
                    <div className={styles.flexStepButtons}>
                        <Link href="joints"><p className={styles.stepButton}>&larr; previous</p></Link>
                        <Link href="kast-lade"><p className={styles.stepButton}>next &rarr;</p></Link>
                    </div>
                </main>

                <footer className={styles.footer}>
                    <p>by: Erin Troch</p>
                </footer>
            </div>
        </>
    )
}