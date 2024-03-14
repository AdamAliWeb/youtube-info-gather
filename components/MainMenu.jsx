import { Link } from "react-router-dom";

export default function MainMenu() {
    return (
        <article className="m-3 flex flex-col items-center ">
            <nav className="my-2">
                <Link
                    className="inline-block bg-amber-500 text-white p-2 rounded-full font-bold border-black border-2"
                    to="/playlist"
                >
                    Playlist
                </Link>
            </nav>
            <p className="md:text-lg text-center max-w-screen-lg">
                This app allows you to gather information from YouTube content.
                Currently, it can collect, save, and compare data from videos in
                a playlist. This is helpful because sometimes YouTube videos are
                deleted without notice. It can be tedious to find and recover
                them, but with this app, you can save playlist information and
                easily identify missing videos. More features will be added in
                the future.
            </p>
        </article>
    );
}
