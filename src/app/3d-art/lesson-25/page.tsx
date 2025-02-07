import Image from "next/image";
import GoogleDrivePic from "/public/static/images/google_drive.png";
import Link from "next/link";

export default function Page() {
    return (
        <main className="container">
            <div className="row">
                <div className="col-md-7">
                    <h2 className="mt-3 mb-2">Lesson: Art Portfolio Creation</h2>
                    <h4 className="mt-3">Instructions</h4>
                    <p>Please watch <a href="https://app.screencastify.com/v3/watch/3DV75KQluMYpdXfrmfmj" target="_blank">Art Portfolio Creation</a>
                        &nbsp;in its entirety.</p>
                    <p>To complete this section of your WOW PRoject Presentation checklist you must do the following...</p>
                    <ol>
                        <li>
                            Make a folder in Drive named (first name last name art portfolio)
                        </li>
                        <li>
                            Share this folder with Mrs. Sampica
                        </li>
                        <li>
                            Take a photo of your art project.
                        </li>
                        <li>Upload your photo to your folder from your camera roll.</li>
                        <li>Rename your photo to your project name (match the project name in your artist statement).</li>
                        <li><strong>Double check your folder is shared with your teacher and all names are correct!</strong></li>
                    </ol>

                </div>
                <div className="col-12">
                    <Link href={GoogleDrivePic.src} target="_blank">
                        <Image src={GoogleDrivePic} alt="google drive" width={600} className="img-fluid rounded" style={{ "cursor": "zoom-in" }} />
                    </Link>
                </div>
            </div>
        </main>
    );
}