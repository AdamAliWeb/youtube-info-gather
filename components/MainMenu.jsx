import { Link } from "react-router-dom";

export default function MainMenu() {
    return (
        <article className="m-3 flex flex-col items-center ">
            <nav className="my-2">
                <Link
                    className="inline-block bg-amber-500 text-white text-center py-1 px-4 md:py-2 md:px-5 m-2  rounded-full font-bold border-2 border-black hover:bg-white hover:text-amber-500 transition-colors duration-300 cursor-pointer"
                    to="/playlist"
                >
                    Playlist
                </Link>
            </nav>
            <p className="md:text-lg text-center max-w-screen-lg m-1">
                This app helps you gather information from YouTube content.
                Currently, it can collect, save, and compare data from videos in
                a playlist. This is useful because YouTube videos are sometimes
                deleted without notice. It can be difficult to find and restore
                them, but with this app, you can save playlist information and
                easily identify missing videos.
            </p>

            <p className="md:text-lg text-center max-w-screen-lg m-1">
                If you come across private or deleted videos, you can try to
                locate them using{" "}
                <a
                    className="underline hover:text-amber-500 transition-colors duration-300"
                    href="https://youtubevideofinder.site"
                    target="_blank"
                >
                    YouTube Video Finder
                </a>
                . While it can't guarantee recovery, it's worth a try.
                Afterward, you can save the updated playlist data for future
                reference.
            </p>

            <p className="md:text-lg text-center max-w-screen-lg m-1">
                Additional features for managing videos and playlists will be
                incorporated in future updates.
            </p>
        </article>
    );
}
