import styles from "./page.module.css";
import Image from "next/image"
import slide1Pic from "/public/static/images/1.jpg"
import slide2Pic from "/public/static/images/2.jpg"
import slide3Pic from "/public/static/images/3.jpg"
import slide4Pic from "/public/static/images/4.jpg"
import slide5Pic from "/public/static/images/5.jpg"
import { Wavey, WaveyMirror } from "./components/wavey/wavey";
import { BluePillar, PinkPillar, OrangePillar, YellowPillar } from "./components/pillar/pillar";
import { BlueSplashButton, PinkSplashButton, OrangeSplashButton, YellowSplashButton } from "./components/splashButton/splashButton";

export default function Page() {
  return (
    <main>
      <div className={styles.homenav + " container d-flex justify-content-evenly gap-1"}>
        <BluePillar>
          <h2 className="h4">2D Art</h2>
          <p>Project 1 due October 5th</p>
        </BluePillar>
        <PinkPillar>
          <h2 className="h4">3D Art</h2>
          <p>Project 2 due December 17th</p>
        </PinkPillar>
        <OrangePillar>
          <h2 className="h4">Graphic Design</h2>
          <p></p>
        </OrangePillar>
        <YellowPillar>
          <h2 className="h4">Ceramics</h2>
          <p></p>
        </YellowPillar>
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
          </div>
        </div>
      </Wavey>
      <WaveyMirror className="d-flex align-items-center" waveColor="#ffdfcc" style={{ ["marginTop" as string]: "-7rem" }}>
        <div className="container">
          <h2 className="text-center">Featured Student Work</h2>
          <div id="homeCarousel" className="carousel slide">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
              <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
              <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="4" aria-label="Slide 5"></button>
            </div>
            <div className="carousel-inner text-center">
              <div className="carousel-item active">
                <Image src={slide1Pic} alt="..." className="img-fluid d-block " />
                <div className="carousel-caption d-none d-md-block">
                  <h5>MJ Tenney</h5>
                </div>
              </div>
              <div className="carousel-item">
                <Image src={slide2Pic} alt="..." className="img-fluid d-block " />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Lydia Stamp</h5>
                </div>
              </div>
              <div className="carousel-item">
                <Image src={slide3Pic} alt="..." className="img-fluid d-block " />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Kenzi Wallroff</h5>
                </div>
              </div>
              <div className="carousel-item">
                <Image src={slide4Pic} alt="..." className="img-fluid d-block " />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Brooklyn Richmann</h5>
                </div>
              </div>
              <div className="carousel-item">
                <Image src={slide5Pic} alt="..." className="img-fluid d-block " />
                <div className="carousel-caption d-none d-md-block">
                  <h5>McKenna Ricklefs</h5>
                </div>
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
        </div>
      </WaveyMirror>
    </main>
  );
}
