import { Link } from "react-router-dom";

export default function Home() {
    return (
        <article className="m-3 flex flex-col items-center ">
            <h1 className="text-7xl desktop:text-9xl font-bold my-3">Home</h1>
            <section>
                <p className="desktop:text-lg  max-w-screen-lg mx-2 my-4">
                    This app helps you gather information from{" "}
                    <strong>YouTube</strong> content. Currently, it can collect,
                    save, and compare data from videos in a playlist. This is
                    useful because <strong>YouTube</strong> videos are sometimes
                    deleted without notice. It can be difficult to find and
                    restore them, but with this app, you can save playlist
                    information and easily identify missing videos.
                </p>

                <p className="desktop:text-lg max-w-screen-lg mx-2 my-4">
                    If you come across private or deleted videos, you can try to
                    locate them using{" "}
                    <a
                        className="underline yig-link yig-first-blue transition-colors duration-300"
                        href="https://youtubevideofinder.site"
                        target="_blank"
                    >
                        YouTube Video Finder
                    </a>
                    . While it can't guarantee recovery, it's worth a try.
                    Afterward, you can save the updated playlist data for future
                    reference.
                </p>
            </section>

            <h2 className="text-3xl desktop:text-6xl my-3">Options</h2>
            <nav className="my-2">
                <Link
                    className="yig-btn yig-first-yellow-bg yig-first-yellow-border yig-black block text-center text-xl desktop:text-2xl py-3 px-6 desktop:py-5 desktop:px-10 m-3 rounded-lg border-2 hover:bg-white shadow-2xl transition-colors duration-300 cursor-pointer"
                    to="/playlist"
                >
                    Playlist
                </Link>
            </nav>

            <p className="desktop:text-lg text-center max-w-screen-lg m-1">
                Additional features for managing videos and playlists will be
                incorporated in future updates.
            </p>
        </article>
    );
}
