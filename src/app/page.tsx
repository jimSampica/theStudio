import styles from "./page.module.css";
import Image from "next/image"
import slide1Pic from "/public/static/images/1.jpg"
import slide2Pic from "/public/static/images/2.jpg"
import slide3Pic from "/public/static/images/3.jpg"
import { Wavey, WaveyMirror } from "./components/wavey/wavey";
import { BluePillar, PinkPillar, OrangePillar, YellowPillar } from "./components/pillar/pillar";
import { BlueSplashButton, PinkSplashButton, OrangeSplashButton, YellowSplashButton } from "./components/splashButton/splashButton";

export default function Home() {
  return (
    <main>
      <div className={styles.homenav + " container d-flex justify-content-evenly gap-1"}>
        <BluePillar>
          <p>2D Art</p>
        </BluePillar>
        <PinkPillar>
          <p>3D Art</p>
        </PinkPillar>
        <OrangePillar>
          <p>Graphic Design</p>
        </OrangePillar>
        <YellowPillar>
          <p>Ceramics</p>
        </YellowPillar>
      </div>
      <Wavey className="d-flex align-items-center" waveColor="#d7d0ff">
        <div className="container">
          <div className="d-flex justify-content-evenly align-items-center gap-3 flex-column flex-md-row">
            <BlueSplashButton>
              2D Art
            </BlueSplashButton>
            <PinkSplashButton>
              3D Art
            </PinkSplashButton>
            <OrangeSplashButton>
              Graphic Design
            </OrangeSplashButton>
            <YellowSplashButton>
              Ceramics
            </YellowSplashButton>
          </div>
        </div>
      </Wavey>
      <WaveyMirror className="d-flex align-items-center" waveColor="#d7F0ff" style={{ ["margin-top" as string]: "-7rem" }}>
        <div className="container">
          <h2 className="text-center">Featured Student Work</h2>
          <div id="homeCarousel" className="carousel slide">
            <div className="carousel-inner text-center">
              <div className="carousel-item active">
                <Image src={slide1Pic} alt="..." className="img-fluid" />
              </div>
              <div className="carousel-item">
                <Image src={slide2Pic} alt="..." className="img-fluid" />
              </div>
              <div className="carousel-item">
                <Image src={slide3Pic} alt="..." className="img-fluid" />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#homeCarousel" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#homeCarousel" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          <div className="d-flex justify-content-end mt-3">
            <a href="#" className="btn btn-outline-dark">View More...</a>
          </div>
        </div>
      </WaveyMirror>
    </main>
  );
}
