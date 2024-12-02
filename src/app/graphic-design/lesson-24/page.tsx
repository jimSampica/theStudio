import Link from "next/link";

export default function Page() {
    return (
        <main className="container">
            <div className="row">
                <div className="col-md-7">
                    <h2 className="mt-3 mb-2">Lesson: Mini Zine</h2>
                    <h4 className="mt-3">Instructions</h4>
                    <p>Please watch <a href="https://app.screencastify.com/v3/watch/5qlmUTN1LcPyIGTA9GHt" target="_blank">Mini Zine</a>
                        &nbsp;in its entirety.</p>
                    <p>
                        The completion of this lesson is designed to help you make your own Zine. 
                        You can choose the theme but you must adhere to the following requirements...
                    </p>
                    <h4 className="mt-3">Requirements</h4>
                    <ol>
                        <li>Each side of each page must be 100% completed</li>
                        <li>All pages must be colored in some form</li>
                        <li>No scribble lines (smooth even coverage without white poking through)</li>
                        <li>Must have a cover page with a title</li>
                        <li>Must be 1 theme</li>
                        <li>Should utilize C.R.A.P. If you don’t know what this is, see&nbsp;
                            <Link href="/graphic-design/lesson-11">Principles of Design</Link></li>
                    </ol>
                    <h4 className="mt-3">Theme ideas</h4>
                    <ul>
                        <li>Sports</li>
                        <li>Animals</li>
                        <li>Hobbies</li>
                        <li>Nature</li>
                        <li>Ideas/Dreams</li>
                        <li>Holidays or a holiday</li>
                        <li>TV/Media</li>
                        <li>Crafts</li>
                        <li>Family</li>
                    </ul>
                </div>
            </div>
        </main>
    );
}