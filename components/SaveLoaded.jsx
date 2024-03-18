import { useEffect, useState } from "react";
import { detectHiddenVideos, parseDateForFiles } from "../helpers/utilities";
import { Link } from "react-router-dom";

export default function SaveLoaded({ data }) {
    const [permitSave, setPermitSave] = useState(false);

    useEffect(() => {
        if (detectHiddenVideos(data.videos) === false) {
            setPermitSave(true);
        }
    }, []);

    return (
        <section className="text-center p-2">
            <ul className="bg-slate-200 my-1 md:my-2 p-2 md:p-4 rounded">
                <li>
                    <span className="font-bold">Title: </span>
                    {data.title}
                </li>
                <li>
                    <span className="font-bold">Channel: </span>
                    {data.channel}
                </li>
                <li>
                    <span className="font-bold">Published Date: </span>
                    {data.publishedDate}
                </li>
                <li>
                    <span className="font-bold">Videos: </span>
                    {data.count}
                </li>
                <li>
                    <a
                        className="font-bold underline"
                        href={data.url}
                        target="_blank"
                    >
                        Playlist Link
                    </a>
                </li>
            </ul>

            {permitSave === true ? (
                <a
                    className="submit-btn inline-block bg-amber-500 text-white text-center py-1 px-4 md:py-2 md:px-5 m-2 md:mt-4 rounded-full font-bold border-black border-2 hover:bg-white hover:text-amber-500 transition-colors duration-300"
                    href={
                        "data:," +
                        JSON.stringify(data, null, 4).replace(/#/g, "%23")
                    }
                    download={`${data.title} ${parseDateForFiles(
                        new Date().toJSON()
                    )}.json`}
                    onClick={() => location.reload()}
                >
                    Save
                </a>
            ) : (
                <div className="w-full my-4 max-w-screen-md bg-red-200 rounded flex flex-col items-center p-2">
                    <p className="p-2  text-center">
                        There are some hidden/private/deleted videos. I suggest
                        checking the details to see which ones they are and
                        either replace or delete them from the playlist. Do you
                        still want to save the log?
                    </p>
                    <div className="flex gap-8">
                        <button
                            className="block bg-amber-500 text-white text-center py-1 px-4 md:py-2 md:px-5 m-2 md:mt-4 rounded-full font-bold border-2 border-black hover:bg-white hover:text-amber-500 transition-colors duration-300 cursor-pointer"
                            onClick={() => setPermitSave(true)}
                        >
                            Proceed
                        </button>
                        <Link
                            className="block bg-amber-500 text-white text-center py-1 px-4 md:py-2 md:px-5 m-2 md:mt-4 rounded-full font-bold border-2 border-black hover:bg-white hover:text-amber-500 transition-colors duration-300 cursor-pointer"
                            to="/playlist/details-checker"
                        >
                            Check Details
                        </Link>
                    </div>
                </div>
            )}
        </section>
    );
}
