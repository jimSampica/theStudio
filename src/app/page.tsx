import styles from "./page.module.css";
import { Wavey, WaveyMirror } from "./components/wavey/wavey";
import { BluePillar, PinkPillar, OrangePillar, YellowPillar, PurplePillar } from "./components/pillar/pillar";
import { BlueSplashButton, PinkSplashButton, OrangeSplashButton, YellowSplashButton, PurpleSplashButton } from "./components/splashButton/splashButton";
import Carousel from "./components/carousel/carousel";

export default function Page() {
  return (
    <main>
      <div className={styles.homenav + " container d-flex justify-content-evenly gap-1"}>
        <BluePillar>
          <h2 className="h4">2D Art</h2>
          <p className="p-2">
            We will explore art ideas on flat surfaces like painting, drawing, and printmaking.
          </p>
        </BluePillar>
        <PinkPillar>
          <h2 className="h4">3D Art</h2>
          <p className="p-2">
            Where we investigate non-clay sculpture projects. We will use mixed media, cardboard, yarn, and paper mache.
          </p>
        </PinkPillar>
        <OrangePillar>
          <h2 className="h4">Graphic Design</h2>
          <p className="p-2">
            There are no Graphic design courses held this semester.
          </p>
        </OrangePillar>
        <YellowPillar>
          <h2 className="h4">Ceramics</h2>
          <p className="p-2">
            We delve into the world of clay! Making pottery and clay sculptures and learning the science and history behind it.
          </p>
        </YellowPillar>
        <PurplePillar>
          <h2 className="h4">Innovators</h2>
          <p className="p-2">
             In this class we explore STEM concepts and merge art and science together.
          </p>
        </PurplePillar>
      </div>
      <Wavey className="d-flex align-items-center" waveColor="#d7d0ff">
        <div className="container">
          <div className="d-flex justify-content-evenly align-items-center gap-3 flex-column flex-md-row">
            <BlueSplashButton href={"/2d-art"}>
              2D Art
            </BlueSplashButton>
            <PinkSplashButton href={"/3d-art"}>
              3D Art
            </PinkSplashButton>
            <OrangeSplashButton href={"/graphic-design"}>
              Graphic Design
            </OrangeSplashButton>
            <YellowSplashButton href={"/ceramics"}>
              Ceramics
            </YellowSplashButton>
            <PurpleSplashButton href={"/innovators"}>
              Innovators
            </PurpleSplashButton>
          </div>
        </div>
      </Wavey>
      <WaveyMirror waveColor="#ffdfcc" style={{ ["marginTop" as string]: "-7rem" }}>
        <h2 className="text-center">Featured Student Work</h2>
        <Carousel></Carousel>
      </WaveyMirror>
    </main>
  );
}
