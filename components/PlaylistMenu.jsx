import { Link, Outlet } from "react-router-dom";

export default function PlaylistMenu() {
    return (
        <article className="flex flex-col items-center">
            <h2 className="w-full text-center p-2 border-b-2 border-black">
                <Link
                    className="font-offside text-2xl md:text-4xl hover:text-amber-500 transition-colors duration-300"
                    to="/"
                >
                    ◀ Playlist
                </Link>
            </h2>
            <nav className="w-full my-3 flex justify-center">
                <Link
                    className="inline-block bg-amber-500 text-white text-center p-1 px-2 md:p-2 mx-3 rounded-full font-bold border-black border-2 hover:bg-white hover:text-amber-500 transition-colors duration-300"
                    to="/playlist/save"
                >
                    Save Log
                </Link>
                <Link
                    className="inline-block bg-amber-500 text-white text-center p-1 md:p-2 mx-3 rounded-full font-bold border-black border-2 hover:bg-white hover:text-amber-500 transition-colors duration-300"
                    to="/playlist/check-details"
                >
                    Check Details
                </Link>
            </nav>
            <Outlet />
        </article>
    );
}
