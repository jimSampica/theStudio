import Image from "next/image";
import CardLuminaryImg from "/public/static/images/innovators/card_luminary.jpg";
import JellyfishImg from "/public/static/images/innovators/jellyfish.jpg";
import MinecraftBlockImg from "/public/static/images/innovators/minecraft_block.jpg";
import MushroomLuminaryImg from "/public/static/images/innovators/mushroom_luminary.jpg";
import PaperLuminary from "/public/static/images/innovators/paper_luminary.jpg";
import CansImg from "/public/static/images/innovators/cans.jpg";
import WoodLuminaryImg from "/public/static/images/innovators/wood_luminary.jpg";
import Link from "next/link";

export default function Page() {
    return (
        <main className="container">
            <h2 className="mt-3 mb-2">Lesson: Luminary</h2>
            <h4 className="mt-3">Instructions</h4>
            <p>Please watch <a href="https://app.screencastify.com/v3/watch/Q0mDPQnmcolOWSF7srIa" target="_blank">Luminary</a>
                &nbsp;in its entirety and answer the questions that follow in your workbook.</p>
            <div className="row mb-3">
                <div className="col-md-6">
                    <div className="ratio ratio-16x9">
                        <iframe src="https://drive.google.com/file/d/1pUymuIYeic834iM8zCx4mzjzs9xnP-Ow/preview" title="Luminary"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                </div>
            </div>
            <h4>Workbook</h4>
            <ol>
                <li>Draw up an idea for your luminary -  be prepared to discuss how it will work.</li>
                <li>What do you think will be some challenges to creating your luminary?</li>
                <li>What are the essential components (What supplies do you need to make it work) of your circuit? You may list these.</li>
            </ol>
            <h4>Additional Resources</h4>
            <ol className="list-style-alpha">
                <li><a target="_blank" href="https://www.tinkercad.com/dashboard">Tinkercad</a></li>
            </ol>
            <div className="d-flex justify-content-evenly gap-2">
                <div>
                    <Link href={CardLuminaryImg.src} target="_blank">
                        <Image height={200} src={CardLuminaryImg} alt="circuit diagram" className="img-fluid rounded" style={{ "cursor": "zoom-in" }} />
                    </Link>
                </div>
                <div>
                    <Link href={JellyfishImg.src} target="_blank">
                        <Image height={200} src={JellyfishImg} alt="simple circuit" className="img-fluid rounded" style={{ "cursor": "zoom-in" }} />
                    </Link>
                </div>
                <div>
                    <Link href={MinecraftBlockImg.src} target="_blank">
                        <Image height={200} src={MinecraftBlockImg} alt="simple circuit" className="img-fluid rounded" style={{ "cursor": "zoom-in" }} />
                    </Link>
                </div>
                <div>
                    <Link href={MushroomLuminaryImg.src} target="_blank">
                        <Image height={200} src={MushroomLuminaryImg} alt="simple circuit" className="img-fluid rounded" style={{ "cursor": "zoom-in" }} />
                    </Link>
                </div>
                <div>
                    <Link href={PaperLuminary.src} target="_blank">
                        <Image height={200} src={PaperLuminary} alt="simple circuit" className="img-fluid rounded" style={{ "cursor": "zoom-in" }} />
                    </Link>
                </div>
                <div>
                    <Link href={CansImg.src} target="_blank">
                        <Image height={200} src={CansImg} alt="simple circuit" className="img-fluid rounded" style={{ "cursor": "zoom-in" }} />
                    </Link>
                </div>
                <div>
                    <Link href={WoodLuminaryImg.src} target="_blank">
                        <Image height={200} src={WoodLuminaryImg} alt="simple circuit" className="img-fluid rounded" style={{ "cursor": "zoom-in" }} />
                    </Link>
                </div>
            </div>
        </main>
    );
}