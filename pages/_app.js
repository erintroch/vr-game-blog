import "../styles/globals.css";
import ReactDOM from "react-dom";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      <nav className="top-nav">
        <ul className="top-nav-ul">
          <div className="flex-content-topnav">
            {/* <Link href="/"> */}
            <Link href="/">
              <li className="top-nav-li">BLOGGIN&apos; IS LIFE</li>
            </Link>

            {/* </Link> */}
            <li className="top-nav-li">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://et-design.be/"
              >
                Erin Troch
              </a>
            </li>
          </div>
          <div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/Eerke2001/PersonalPassionProject"
            >
              <Image src="/github-icon.svg" height={50} width={50} />
            </a>
          </div>
        </ul>
      </nav>
      <div className="flex-content">
        <div className="nav-flexer">
          <div className="nav-line-div"></div>
          <div className="ul-wrapper">
            <ul className="nav-ul">
              <Link href="/posts/onderzoeksvraag">
                <li
                  className={
                    router.pathname == "/posts/onderzoeksvraag"
                      ? "nav-li nav-li-head active-li"
                      : "nav-li nav-li-head"
                  }
                >
                  <div className="nav-li-head-list"></div>
                  <p className="nav-li-sub-text">Onderzoeksvraag</p>
                </li>
              </Link>
              <Link href="/posts/first-post">
                <li
                  className={
                    router.pathname == "/posts/first-post"
                      ? "nav-li nav-li-head active-li"
                      : "nav-li nav-li-head"
                  }
                >
                  <div className="nav-li-head-list"></div>
                  <p className="nav-li-sub-text">Eerste ideetjes</p>
                </li>
              </Link>
              <Link href="/posts/tijd-voor-experiment">
                <li
                  className={
                    router.pathname == "/posts/tijd-voor-experiment"
                      ? "nav-li nav-li-sub active-li"
                      : "nav-li nav-li-sub"
                  }
                >
                  <div className="nav-li-sub-list"></div>
                  <p className="nav-li-sub-text">Tijd voor experiment</p>
                </li>
              </Link>
              <Link href="/posts/eerste-pitch">
                <li
                  className={
                    router.pathname == "/posts/eerste-pitch"
                      ? "nav-li nav-li-head active-li"
                      : "nav-li nav-li-head"
                  }
                >
                  <div className="nav-li-head-list"></div>
                  <p className="nav-li-sub-text">Eerste Pitch</p>
                </li>
              </Link>
              <Link href="/posts/start-in-vr">
                <li
                  className={
                    router.pathname == "/posts/start-in-vr"
                      ? "nav-li nav-li-head active-li"
                      : "nav-li nav-li-head"
                  }
                >
                  <div className="nav-li-head-list"></div>
                  <p className="nav-li-sub-text">Aan de slag in VR</p>
                </li>
              </Link>
              <Link href="/posts/experimentele-functies">
                <li
                  className={
                    router.pathname == "/posts/experimentele-functies"
                      ? "nav-li nav-li-sub active-li"
                      : "nav-li nav-li-sub"
                  }
                >
                  <div className="nav-li-sub-list"></div>
                  <p className="nav-li-sub-text">Developer-mode</p>
                </li>
              </Link>
              <Link href="/posts/developer-account">
                <li
                  className={
                    router.pathname == "/posts/developer-account"
                      ? "nav-li nav-li-sub active-li"
                      : "nav-li nav-li-sub"
                  }
                >
                  <div className="nav-li-sub-list"></div>
                  <p className="nav-li-sub-text">Developer account</p>
                </li>
              </Link>
              <Link href="/posts/unity-packages">
                <li
                  className={
                    router.pathname == "/posts/unity-packages"
                      ? "nav-li nav-li-sub active-li"
                      : "nav-li nav-li-sub"
                  }
                >
                  <div className="nav-li-sub-list"></div>
                  <p className="nav-li-sub-text">Unity packages</p>
                </li>
              </Link>
              <Link href="/posts/oculus-app-mac">
                <li
                  className={
                    router.pathname == "/posts/oculus-app-mac"
                      ? "nav-li nav-li-sub active-li"
                      : "nav-li nav-li-sub"
                  }
                >
                  <div className="nav-li-sub-list"></div>
                  <p className="nav-li-sub-text">Oculus app (mac)</p>
                </li>
              </Link>
              <Link href="/posts/mac-to-windows">
                <li
                  className={
                    router.pathname == "/posts/mac-to-windows"
                      ? "nav-li nav-li-sub active-li"
                      : "nav-li nav-li-sub"
                  }
                >
                  <div className="nav-li-sub-list"></div>
                  <p className="nav-li-sub-text">Mac naar windows</p>
                </li>
              </Link>
              <Link href="/posts/oculus-app-windows">
                <li
                  className={
                    router.pathname == "/posts/oculus-app-windows"
                      ? "nav-li nav-li-sub active-li"
                      : "nav-li nav-li-sub"
                  }
                >
                  <div className="nav-li-sub-list"></div>
                  <p className="nav-li-sub-text">Oculus app (windows)</p>
                </li>
              </Link>
              <Link href="/posts/preview-in-unity">
                <li
                  className={
                    router.pathname == "/posts/preview-in-unity"
                      ? "nav-li nav-li-head active-li"
                      : "nav-li nav-li-head"
                  }
                >
                  <div className="nav-li-head-list"></div>
                  <p className="nav-li-sub-text">Preview in Unity</p>
                </li>
              </Link>
              <Link href="/posts/unity-android">
                <li
                  className={
                    router.pathname == "/posts/unity-android"
                      ? "nav-li nav-li-sub active-li"
                      : "nav-li nav-li-sub"
                  }
                >
                  <div className="nav-li-sub-list"></div>
                  <p className="nav-li-sub-text">Unity android</p>
                </li>
              </Link>
              <Link href="/posts/de-eerste-preview">
                <li
                  className={
                    router.pathname == "/posts/de-eerste-preview"
                      ? "nav-li nav-li-sub active-li"
                      : "nav-li nav-li-sub"
                  }
                >
                  <div className="nav-li-sub-list"></div>
                  <p className="nav-li-sub-text">De eerste preview</p>
                </li>
              </Link>
              <Link href="/posts/xr-rig">
                <li
                  className={
                    router.pathname == "/posts/xr-rig"
                      ? "nav-li nav-li-head active-li"
                      : "nav-li nav-li-head"
                  }
                >
                  <div className="nav-li-head-list"></div>
                  <p className="nav-li-sub-text">XR-rig</p>
                </li>
              </Link>
              <Link href="/posts/xr-camera">
                <li
                  className={
                    router.pathname == "/posts/xr-camera"
                      ? "nav-li nav-li-sub active-li"
                      : "nav-li nav-li-sub"
                  }
                >
                  <div className="nav-li-sub-list"></div>
                  <p className="nav-li-sub-text">XR camera</p>
                </li>
              </Link>
              <Link href="/posts/hand-models">
                <li
                  className={
                    router.pathname == "/posts/hand-models"
                      ? "nav-li nav-li-sub active-li"
                      : "nav-li nav-li-sub"
                  }
                >
                  <div className="nav-li-sub-list"></div>
                  <p className="nav-li-sub-text">Hand Models</p>
                </li>
              </Link>
              <Link href="/posts/mogelijkheden-in-vr">
                <li
                  className={
                    router.pathname == "/posts/mogelijkheden-in-vr"
                      ? "nav-li nav-li-head active-li"
                      : "nav-li nav-li-head"
                  }
                >
                  <div className="nav-li-head-list"></div>
                  <p className="nav-li-sub-text">Mogelijkheden in VR</p>
                </li>
              </Link>
              <Link href="/posts/unity-physics">
                <li
                  className={
                    router.pathname == "/posts/unity-physics"
                      ? "nav-li nav-li-sub active-li"
                      : "nav-li nav-li-sub"
                  }
                >
                  <div className="nav-li-sub-list"></div>
                  <p className="nav-li-sub-text">Unity Physics</p>
                </li>
              </Link>
              <Link href="/posts/onderzoek-vr">
                <li
                  className={
                    router.pathname == "/posts/onderzoek-vr"
                      ? "nav-li nav-li-sub active-li"
                      : "nav-li nav-li-sub"
                  }
                >
                  <div className="nav-li-sub-list"></div>
                  <p className="nav-li-sub-text">Onderzoek VR</p>
                </li>
              </Link>
              <Link href="/posts/eigen-models">
                <li
                  className={
                    router.pathname == "/posts/eigen-models"
                      ? "nav-li nav-li-head active-li"
                      : "nav-li nav-li-head"
                  }
                >
                  <div className="nav-li-head-list"></div>
                  <p className="nav-li-sub-text">Eigen models</p>
                </li>
              </Link>
              <Link href="/posts/fbx-ready">
                <li
                  className={
                    router.pathname == "/posts/fbx-ready"
                      ? "nav-li nav-li-sub active-li"
                      : "nav-li nav-li-sub"
                  }
                >
                  <div className="nav-li-sub-list"></div>
                  <p className="nav-li-sub-text">FBX ready</p>
                </li>
              </Link>
              <Link href="/posts/models">
                <li
                  className={
                    router.pathname == "/posts/models"
                      ? "nav-li nav-li-sub active-li"
                      : "nav-li nav-li-sub"
                  }
                >
                  <div className="nav-li-sub-list"></div>
                  <p className="nav-li-sub-text">Models</p>
                </li>
              </Link>
              <Link href="/posts/inladen-in-unity">
                <li
                  className={
                    router.pathname == "/posts/inladen-in-unity"
                      ? "nav-li nav-li-sub active-li"
                      : "nav-li nav-li-sub"
                  }
                >
                  <div className="nav-li-sub-list"></div>
                  <p className="nav-li-sub-text">Inladen in unity</p>
                </li>
              </Link>
              <Link href="/posts/colliders">
                <li
                  className={
                    router.pathname == "/posts/colliders"
                      ? "nav-li nav-li-sub active-li"
                      : "nav-li nav-li-sub"
                  }
                >
                  <div className="nav-li-sub-list"></div>
                  <p className="nav-li-sub-text">Colliders</p>
                </li>
              </Link>
              <Link href="/posts/verplaatsen-in-vr">
                <li
                  className={
                    router.pathname == "/posts/verplaatsen-in-vr"
                      ? "nav-li nav-li-head active-li"
                      : "nav-li nav-li-head"
                  }
                >
                  <div className="nav-li-head-list"></div>
                  <p className="nav-li-sub-text">Verplaatsen in VR</p>
                </li>
              </Link>
              <Link href="/posts/joints">
                <li
                  className={
                    router.pathname == "/posts/joints"
                      ? "nav-li nav-li-head active-li"
                      : "nav-li nav-li-head"
                  }
                >
                  <div className="nav-li-head-list"></div>
                  <p className="nav-li-sub-text">Joints</p>
                </li>
              </Link>
              <Link href="/posts/deur-joint">
                <li
                  className={
                    router.pathname == "/posts/deur-joint"
                      ? "nav-li nav-li-sub active-li"
                      : "nav-li nav-li-sub"
                  }
                >
                  <div className="nav-li-sub-list"></div>
                  <p className="nav-li-sub-text">Deur Joint</p>
                </li>
              </Link>
              <Link href="/posts/kast-lade">
                <li
                  className={
                    router.pathname == "/posts/kast-lade"
                      ? "nav-li nav-li-sub active-li"
                      : "nav-li nav-li-sub"
                  }
                >
                  <div className="nav-li-sub-list"></div>
                  <p className="nav-li-sub-text">Kast lade</p>
                </li>
              </Link>
              <Link href="/posts/onderwater">
                <li
                  className={
                    router.pathname == "/posts/onderwater"
                      ? "nav-li nav-li-head active-li"
                      : "nav-li nav-li-head"
                  }
                >
                  <div className="nav-li-head-list"></div>
                  <p className="nav-li-sub-text">Onderwater</p>
                </li>
              </Link>
              <Link href="/posts/constant-force">
                <li
                  className={
                    router.pathname == "/posts/constant-force"
                      ? "nav-li nav-li-sub active-li"
                      : "nav-li nav-li-sub"
                  }
                >
                  <div className="nav-li-sub-list"></div>
                  <p className="nav-li-sub-text">Constant force</p>
                </li>
              </Link>
              <Link href="/posts/mist">
                <li
                  className={
                    router.pathname == "/posts/mist"
                      ? "nav-li nav-li-sub active-li"
                      : "nav-li nav-li-sub"
                  }
                >
                  <div className="nav-li-sub-list"></div>
                  <p className="nav-li-sub-text">Mist</p>
                </li>
              </Link>
              <Link href="/posts/particles">
                <li
                  className={
                    router.pathname == "/posts/particles"
                      ? "nav-li nav-li-sub active-li"
                      : "nav-li nav-li-sub"
                  }
                >
                  <div className="nav-li-sub-list"></div>
                  <p className="nav-li-sub-text">Particles</p>
                </li>
              </Link>
              <Link href="/posts/verhaallijn">
                <li
                  className={
                    router.pathname == "/posts/verhaallijn"
                      ? "nav-li nav-li-head active-li"
                      : "nav-li nav-li-head"
                  }
                >
                  <div className="nav-li-head-list"></div>
                  <p className="nav-li-sub-text">Verhaallijn</p>
                </li>
              </Link>
              <Link href="/posts/bugs-muur">
                <li
                  className={
                    router.pathname == "/posts/bugs-muur"
                      ? "nav-li nav-li-sub active-li"
                      : "nav-li nav-li-sub"
                  }
                >
                  <div className="nav-li-sub-list"></div>
                  <p className="nav-li-sub-text">Bugs - muur</p>
                </li>
              </Link>
              <Link href="/posts/bugs-handen">
                <li
                  className={
                    router.pathname == "/posts/bugs-handen"
                      ? "nav-li nav-li-sub active-li"
                      : "nav-li nav-li-sub"
                  }
                >
                  <div className="nav-li-sub-list"></div>
                  <p className="nav-li-sub-text">Bugs - handen</p>
                </li>
              </Link>
              <Link href="/posts/bugs-objecten">
                <li
                  className={
                    router.pathname == "/posts/bugs-objecten"
                      ? "nav-li nav-li-sub active-li"
                      : "nav-li nav-li-sub"
                  }
                >
                  <div className="nav-li-sub-list"></div>
                  <p className="nav-li-sub-text">Bugs - objecten</p>
                </li>
              </Link>
              <Link href="/posts/startup-scene">
                <li
                  className={
                    router.pathname == "/posts/startup-scene"
                      ? "nav-li nav-li-sub active-li"
                      : "nav-li nav-li-sub"
                  }
                >
                  <div className="nav-li-sub-list"></div>
                  <p className="nav-li-sub-text">Start-up scene</p>
                </li>
              </Link>
              <Link href="/posts/tussen-scene">
                <li
                  className={
                    router.pathname == "/posts/tussen-scene"
                      ? "nav-li nav-li-sub active-li"
                      : "nav-li nav-li-sub"
                  }
                >
                  <div className="nav-li-sub-list"></div>
                  <p className="nav-li-sub-text">Tussen scene</p>
                </li>
              </Link>
              <Link href="/posts/oxygen-bar">
                <li
                  className={
                    router.pathname == "/posts/oxygen-bar"
                      ? "nav-li nav-li-sub active-li"
                      : "nav-li nav-li-sub"
                  }
                >
                  <div className="nav-li-sub-list"></div>
                  <p className="nav-li-sub-text">Oxygen bar</p>
                </li>
              </Link>
              <Link href="/posts/kleine-animatie">
                <li
                  className={
                    router.pathname == "/posts/kleine-animatie"
                      ? "nav-li nav-li-sub active-li"
                      : "nav-li nav-li-sub"
                  }
                >
                  <div className="nav-li-sub-list"></div>
                  <p className="nav-li-sub-text">Kleine animatie</p>
                </li>
              </Link>
              <Link href="/posts/opdrachten">
                <li
                  className={
                    router.pathname == "/posts/opdrachten"
                      ? "nav-li nav-li-head active-li"
                      : "nav-li nav-li-head"
                  }
                >
                  <div className="nav-li-head-list"></div>
                  <p className="nav-li-sub-text">Opdrachten</p>
                </li>
              </Link>
              <Link href="/posts/puzzel">
                <li
                  className={
                    router.pathname == "/posts/puzzel"
                      ? "nav-li nav-li-sub active-li"
                      : "nav-li nav-li-sub"
                  }
                >
                  <div className="nav-li-sub-list"></div>
                  <p className="nav-li-sub-text">Puzzel</p>
                </li>
              </Link>
              <Link href="/posts/kluis">
                <li
                  className={
                    router.pathname == "/posts/kluis"
                      ? "nav-li nav-li-sub active-li"
                      : "nav-li nav-li-sub"
                  }
                >
                  <div className="nav-li-sub-list"></div>
                  <p className="nav-li-sub-text">Kluis</p>
                </li>
              </Link>
              <Link href="/posts/laser">
                <li
                  className={
                    router.pathname == "/posts/laser"
                      ? "nav-li nav-li-sub active-li"
                      : "nav-li nav-li-sub"
                  }
                >
                  <div className="nav-li-sub-list"></div>
                  <p className="nav-li-sub-text">Laser</p>
                </li>
              </Link>
              <Link href="/posts/sleutels">
                <li
                  className={
                    router.pathname == "/posts/sleutels"
                      ? "nav-li nav-li-sub active-li"
                      : "nav-li nav-li-sub"
                  }
                >
                  <div className="nav-li-sub-list"></div>
                  <p className="nav-li-sub-text">Sleutels</p>
                </li>
              </Link>
              <Link href="/posts/gameover-win">
                <li
                  className={
                    router.pathname == "/posts/gameover-win"
                      ? "nav-li nav-li-head active-li"
                      : "nav-li nav-li-head"
                  }
                >
                  <div className="nav-li-head-list"></div>
                  <p className="nav-li-sub-text">Game Over - Win</p>
                </li>
              </Link>
              <Link href="/posts/afwerking">
                <li
                  className={
                    router.pathname == "/posts/afwerking"
                      ? "nav-li nav-li-head active-li"
                      : "nav-li nav-li-head"
                  }
                >
                  <div className="nav-li-head-list"></div>
                  <p className="nav-li-sub-text">Afwerking</p>
                </li>
              </Link>
              <Link href="/posts/baked-lighting">
                <li
                  className={
                    router.pathname == "/posts/baked-lighting"
                      ? "nav-li nav-li-sub active-li"
                      : "nav-li nav-li-sub"
                  }
                >
                  <div className="nav-li-sub-list"></div>
                  <p className="nav-li-sub-text">Baked Lighting</p>
                </li>
              </Link>
              <Link href="/posts/weglaten-multiplayer">
                <li
                  className={
                    router.pathname == "/posts/weglaten-multiplayer"
                      ? "nav-li nav-li-head active-li"
                      : "nav-li nav-li-head"
                  }
                >
                  <div className="nav-li-head-list"></div>
                  <p className="nav-li-sub-text">Weglaten multiplayer</p>
                </li>
              </Link>
              <Link href="/posts/project-build">
                <li
                  className={
                    router.pathname == "/posts/project-build"
                      ? "nav-li nav-li-head active-li"
                      : "nav-li nav-li-head"
                  }
                >
                  <div className="nav-li-head-list"></div>
                  <p className="nav-li-sub-text">Project Build</p>
                </li>
              </Link>
              <Link href="/posts/besluit">
                <li
                  className={
                    router.pathname == "/posts/besluit"
                      ? "nav-li nav-li-head active-li"
                      : "nav-li nav-li-head"
                  }
                >
                  <div className="nav-li-head-list"></div>
                  <p className="nav-li-sub-text">Besluit</p>
                </li>
              </Link>
            </ul>
          </div>
        </div>
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
