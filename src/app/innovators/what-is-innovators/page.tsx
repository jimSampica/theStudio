import Image from "next/image";
import InnovatorQuotePic from "/public/static/images/innovator_quote.png";
import SoloCupPic1 from "/public/static/images/solo_cup_challenge_1.png";
import SoloCupPic2 from "/public/static/images/solo_cup_challenge_2.png";

export default function Page() {
  return (
    <main className="container">
      <div className="row">
        <div className="col-md-7">
          <h2 className="mt-3 mb-2">Lesson: What is &quot;Innovators&quot;?</h2>
          <h4 className="mt-3">Instructions</h4>
          <p>Please watch <a href="https://app.screencastify.com/v3/watch/d86KOhnsD2QISM7Yd2xC" target="_blank">this video</a>
            &nbsp;in its entirety and complete the activity and answer the questions on the project worksheet.</p>
          <div className="ratio ratio-16x9">
            <iframe src="https://www.youtube.com/embed/75okexRzWMk?si=ThC8jDk13mm1hhqY"
              title="How To Be An Inventor! "
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          </div>
          <h4 className="mt-3">Workbook</h4>
          <ol className="list-style-alpha">
            <li>Invent a solution to a problem you have.</li>
            <li>What good advice did Kid President have for inventors (more than one answer)</li>
            <li>What do you think Charles F. Kettering meant by his quote pictured here?</li>
          </ol>
          <h4 className="mt-3">Activity</h4>
          <div className="row">
            <div className="col-md-6">
              <Image src={SoloCupPic1} alt="" className="img-fluid" />
            </div>
            <div className="col-md-6">
              <Image src={SoloCupPic2} alt="" className="img-fluid" />
            </div>
          </div>
        </div>
        <div className="col-md-5">
          <Image src={InnovatorQuotePic} alt="" width={375} className="img-fluid" />
        </div>
      </div>
    </main>
  );
}