import styles from "./page.module.css";
import Image from 'next/image'
import slide1Pic from './media/1.jpg'
import slide2Pic from './media/2.jpg'
import slide3Pic from './media/3.jpg'

export default function Home() {
  return (
    <main>
      <h2>Featured Student Work</h2>

      <div className={styles.topwave}>
      </div>
      <div className={styles.bottomwave + " d-flex align-items-center justify-content-center"}>
        <div id="carouselExampleIndicators" className="carousel slide">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
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
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </main>
  );
}
