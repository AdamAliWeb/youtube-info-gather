import { Link, Outlet } from "react-router-dom";

export default function PlaylistMenu() {
    return (
        <article className="flex flex-col items-center">
            <h1 className="text-7xl desktop:text-9xl font-bold my-3">
                Playlist
            </h1>
            <p className="text-center p-1 desktop:text-lg ">
                This is the playlist section. Here, you can save information or
                check the details of a playlist with these options.
            </p>
            <nav className="w-full my-3 flex flex-col desktop:flex-row justify-center items-center">
                <Link
                    className="yig-btn yig-first-yellow-bg yig-first-yellow-border yig-black block text-center text-xl desktop:text-2xl py-3 px-6 desktop:py-5 desktop:px-10 m-6 rounded-lg border-2 hover:bg-white shadow-2xl transition-colors duration-300 cursor-pointer"
                    to="/playlist/log-saving"
                >
                    Log Saving
                </Link>
                <Link
                    className="yig-btn yig-first-yellow-bg yig-first-yellow-border yig-black block text-center text-xl desktop:text-2xl py-3 px-6 desktop:py-5 desktop:px-10 m-6 rounded-lg border-2 hover:bg-white shadow-2xl transition-colors duration-300 cursor-pointer"
                    to="/playlist/details-checker"
                >
                    Details Checker
                </Link>
            </nav>
            <Outlet />
        </article>
    );
}
