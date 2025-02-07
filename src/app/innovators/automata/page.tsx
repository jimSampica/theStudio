import Image from "next/image";
import AutomataPic from "/public/static/images/automata.png";
import Link from "next/link";

export default function Page() {
    return (
        <main className="container">
            <div className="row">
                <div className="col-md-7">
                    <h2 className="mt-3 mb-2">Lesson: Automata</h2>
                    <h4 className="mt-3">Instructions</h4>
                    <p>Please watch <a href="https://www.youtube.com/watch?v=7dFfzjmkETs" target="_blank">Cardboard Automata Among US Game</a>
                        &nbsp;and&nbsp;<a href="https://www.youtube.com/watch?v=t7SfdOtwib8" target="_blank">How to Make Pull-up Man from Cardboard</a>
                        &nbsp;and&nbsp;<a href="https://www.youtube.com/watch?v=AH9sbyPgwFM&t=24s" target="_blank">How to Make a Automata Toy From Cardboard</a>
                        &nbsp;and&nbsp;<a href="https://app.screencastify.com/v3/watch/M2PWcuqOlJyaa2FRLKRa" target="_blank">Automata</a>
                        &nbsp;in its entirety and follow the instructions below.
                    </p>
                </div>
            </div>
            <Link href={AutomataPic.src} target="_blank">
                <Image src={AutomataPic} alt="automata" width={500} className="img-fluid rounded" style={{ "cursor": "zoom-in" }} />
            </Link>
        </main>
    );
}