import styles from "./page.module.css";
import Image from "next/image"
import slide1Pic from "/public/static/images/1.jpg"
import slide2Pic from "/public/static/images/2.jpg"
import slide3Pic from "/public/static/images/3.jpg"
import Wavey from "./components/wavey/wavey";
import { BluePillar, PinkPillar, OrangePillar, YellowPillar } from "./components/pillar/pillar";
import { BlueSplashButton, PinkSplashButton, OrangeSplashButton, YellowSplashButton } from "./components/splashButton/splashButton";

export default function Home() {
  return (
    <main>
      <div className={styles.homenav + " container d-flex justify-content-evenly"}>
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
      <Wavey>
        <div className="row container">
          <div className="col-md-3">
            <BlueSplashButton>
              2D Art
            </BlueSplashButton>
          </div>
          <div className="col-md-3">
            <PinkSplashButton>
              3D Art
            </PinkSplashButton>
          </div>
          <div className="col-md-3">
            <OrangeSplashButton>
              Graphic Design
            </OrangeSplashButton>
          </div>
          <div className="col-md-3">
            <YellowSplashButton>
              Ceramics
            </YellowSplashButton>
          </div>
        </div>
      </Wavey>
      <Wavey offsetPercent={"75%"} topMargin={-100}>
        <div className="my-5">
          <h2>Featured Student Work</h2>
          <div id="homeCarousel" className="carousel slide">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <Image src={slide1Pic} alt="..." />
              </div>
              <div className="carousel-item">
                <Image src={slide2Pic} alt="..." />
              </div>
              <div className="carousel-item">
                <Image src={slide3Pic} alt="..." />
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
      </Wavey>
    </main>
  );
}
