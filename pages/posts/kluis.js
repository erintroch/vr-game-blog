import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import Link from 'next/link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'

export default function Kluis() {
    return (
        <>
            <div className={styles.container}>
                <Head>
                    <title>Kluis</title>
                    <meta name="description" content="Generated by create next app" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <main className={styles.main}>
                    <h1 className="title">
                        Kluis
                    </h1>
                    <div className={styles.divMaxI}>
                        <p>Ah, de kluis. Echt een steek in je rug. Tijd om ook hier eens te overlopen hoe je een werkende kluis maakt in VR.</p>
                        <p><span className={styles.extra}>Disclaimer:</span> Dit is waarschijnlijk het enige onderwerp waar ik echt de moeite heb genomen om ook mijn &apos;Glitches&apos; eens in beeld te brengen.</p>
                        <p>6u heeft deze kluis me gekost.</p>
                    </div>
                    {/* <p className={styles.description}>
                        Get started by editing{' '}
                        <code className={styles.code}>pages/index.js</code>
                    </p> */}

                    <div className={styles.grid}>
                        <div className={styles.cardLong}>
                            <Image className={styles.cardLongImage} src="/kluisHead.png" height={350} width={800} />
                            <br></br>
                            <br></br>
                            <h2>De Kluis</h2>
                            <p className={styles.descriptionIdea}>Ontwerp</p>
                            <p>Zoals je misschien op de puzzel al hebt gezien bestaat de kluis uit 2 grote wielen waaraan je zal kunnen draaien.</p>
                            <p>In Cinema4D zorgde ik ervoor dat de structuur van de kluis al mooi geordend was.</p>
                            <p>Zo maakte ik een groep met de volledige deur in, en in deze deur zaten de wielen ook mooi gegroepeerd zodat ik deze later in Unity gemakkelijker zou kunnen bereiken.</p>
                            <Image className={styles.cardLongImage} src="/kluisOntw.png" height={350} width={800} />
                            <p>Na het exporteren in Unity gaf ik de kluis uiteraard weer wat kleur, en kon ik beginnen met de physics van deze kluis een keer te doorgronder.</p>
                            <p className={styles.descriptionIdea}>Mechanisme</p>
                            <p>Bij veel onderwerpen vond ik vaak wel blogs of tutorials die me goed opweg konden helpen, maar bij de kluis was dit net iets anders.</p>
                            <p>Er was letterlijk geen spoor te bekennen van de mechanismen die ik nodig had. De belangrijkste grote onderdelen waren:</p>
                            <ul>
                                <li>Het maken van een wiel-draai-systeem</li>
                                <li>Het opendoen van de kluis</li>
                            </ul>
                            <p>Een systeem om een vastneembaar wiel (of roer) te maken is een onderwerp waar slechts enkele mensen een deftig resultaat hebben, maar helemaal niet uitleggen hoe ze eraan komen.</p>
                            <p>Ik ging dus zelf aan de slag om zo&apos;n resultaat te bekomen.</p>
                            <br></br>
                            <p className={styles.descriptionIdea}>Werking</p>
                            <p>In eerste in instantie zou je denken dat dit ongeveer hetzelfde werkt als een deur met een <span className={styles.codeish}>Hinge Joint</span>, maar gewoon met een rond voorwerp.</p>
                            <p>Het probleem hiermee is dat we aan <span className={styles.codeish}>Velocity tracking</span> doen. We bewegen een voorwerp op basis van de coördinaten van ons hand eigenlijk.</p>
                            <p>Om dit even simpel proberen uit te leggen:</p>
                            <p>Stel dat we de rechter-handle even als referentiepunt nemen. Met Velocity Tracking verplaatsen verplaats je een object door een bepaalde waarde aan positie te koppelen.</p>
                            <Image className={styles.cardLongImage} src="/kluisVelocity.png" height={350} width={800} />
                            <p>Onze blauwe Oriëntatie-pijl staat hier verticaal. Dat wil zeggen dat als wij ons hand naar boven (via de verticale as) verplaatsen, dat het voorwerp een <span className={styles.codeish}>Forward Motion</span> zal doen.</p>
                            <p>Als we ons hand naar beneden bewegen, zal ons object een <span className={styles.codeish}>Negative Forward Motion</span> doen (een achterwaartse beweging dus).</p>
                            <p>Dit wil zeggen we onze kluis nooit volledig kunen laten draaien, omdat ons hand naar beneden beweegt als we aan de linkerkant van de kluis zijn aangekomen met onze beweging.</p>
                            <p className={styles.descriptionIdea}>Mislukte pogingen</p>
                            <p>Na vele pogingen om dit probleem op te lossen kwam ik tot de meest onwerkelijke problemen tot nu toe.</p>
                            <Image className={styles.cardLongImage} src="/kluisGlitch1.png" height={350} width={800} />
                            <p>De deur vliegt weg, maar de wielen blijven terplaatse zweven.</p>
                            <Image className={styles.cardLongImage} src="/kluisGlitch2.png" height={350} width={800} />
                            <p>De wielen Gitchen aan alle kanten door de deur als je ze vastneemt.</p>
                            <Image className={styles.cardLongImage} src="/kluisGlitch3.png" height={175} width={800} />
                            <p>Of de volledige deur zakt door de kluis & valt op de grond, en kan je gewoon in je handen nemen.</p>
                            <p className={styles.descriptionIdea}>De oplossing</p>
                            <p>Even ter zake. Uiteindelijk is het me wel gelukt om deze problemen op te lossen.</p>
                            <p>Ik plaatste een <span className={styles.codeish}>Rigidbody</span> Component en een <span className={styles.codeish}>Hinge Joint</span> op mijn buitenste cirkel. Hier was er dus niet echt iets mis mee.</p>
                            <p>Op iedere handle plaatste ik ook terug een Rigidbody, maar een <span className={styles.codeish}>Fixed Joint</span> inplaats van een Hinge Joint.</p>
                            <p>Zorg ervoor dat de &apos;Mass&apos; van deze Rigidbody op een nummer van 8 tot 12 staat, de &apos;Drag&apos; op 0, en de &apos;Angular Drag&apos; op 0.05.</p>
                            <p>Dan moet je je &apos;Connected Body&apos; van je Fixed Joint op je koppelen met je buitenste cirkel.</p>
                            <p>Tot slot moet je aan de ChildElement van je handle ook terug een Rigidbody en een Box Collider toevoegen. De RigidBody van de Child moet op <span className={styles.codeish}>Kinematic</span> staan, en de momenttype van je XR Grab Interactable op Velocity Tracking.</p>
                            <Image className={styles.cardLongImage} src="/rigidKluis.png" height={175} width={800} />
                            <p>experimenteer ook eens met de verschillende Colision Detections. Soms werkten sommige waarden in andere gevallen beter.</p>
                            <p>Op de deur zelf (het overkoepelend element) zorgde ik ervoor dat de rotatie-as al goed stond, zodat ik hier geen extra Joint meer hoefde te gebruiken.</p>
                            <p>Verder zette ik alle Box Colliders van de kluis op een ChildElement binnen de kluis.</p>
                            <Image className={styles.cardLongImage} src="/kluisHead.png" height={350} width={800} />
                            <p>Iedere cubus dat je hier ziet zijn de handles binnen de wielen. Zorg ervoor dat deze handles de Box Collider van je deur niet aanraken, anders zou het kunnen dat je terug een haperig effect bekomt bij het draaien aan de wielen.</p>
                            <p>Tot slot maakte ik terug een script om de deur via een Animatie open te doen, inplaats van ook dit nog eens vast te nemen.</p>
                            <p>Ziezo! Je kan je perfect de wielen roteren met je handen, en na het vinden van de juiste rotatie zal de deur vanzelf opengaan!</p>
                            <p>In de kluis zal er een keycard liggen. Deze heb je nodig om de laser te activeren.</p>
                        </div>
                    </div>
                    <div className={styles.flexStepButtons}>
                        <Link href="puzzel"><p className={styles.stepButton}>&larr; previous</p></Link>
                        <Link href="laser"><p className={styles.stepButton}>next &rarr;</p></Link>
                    </div>
                </main>

                <footer className={styles.footer}>
                    <p>by: Erin Troch</p>
                </footer>
            </div>
        </>
    )
}