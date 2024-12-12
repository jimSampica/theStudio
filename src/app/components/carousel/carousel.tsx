import Image from "next/image";
import slide1Pic from "/public/static/images/featured/1.jpeg";
import slide2Pic from "/public/static/images/featured/2.jpeg";
import slide3Pic from "/public/static/images/featured/3.jpeg";
import slide4Pic from "/public/static/images/featured/4.jpeg";
import slide5Pic from "/public/static/images/featured/5.jpeg";
import slide6Pic from "/public/static/images/featured/6.jpeg";
import slide7Pic from "/public/static/images/featured/7.jpeg";

export default function Carousel() {
    return (
        <div className="container d-flex align-items-center justify-content-center">
            <div id="homeCarousel" className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="4" aria-label="Slide 5"></button>
                    <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="5" aria-label="Slide 6"></button>
                    <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="6" aria-label="Slide 7"></button>
                </div>
                <div className="carousel-inner text-center">
                    <div className="carousel-item active">
                        <Image src={slide1Pic} alt="..." width={600} />
                        <div className="carousel-caption d-none d-md-block">
                            <h5></h5>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <Image src={slide2Pic} alt="..." width={600} />
                        <div className="carousel-caption d-none d-md-block">
                            <h5></h5>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <Image src={slide3Pic} alt="..." width={600} />
                        <div className="carousel-caption d-none d-md-block">
                            <h5></h5>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <Image src={slide4Pic} alt="..." width={600} />
                        <div className="carousel-caption d-none d-md-block">
                            <h5></h5>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <Image src={slide5Pic} alt="..." width={600} />
                        <div className="carousel-caption d-none d-md-block">
                            <h5></h5>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <Image src={slide6Pic} alt="..." width={600} />
                        <div className="carousel-caption d-none d-md-block">
                            <h5></h5>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <Image src={slide7Pic} alt="..." width={600} />
                        <div className="carousel-caption d-none d-md-block">
                            <h5></h5>
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
        </div>);
}