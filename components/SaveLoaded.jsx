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
        <section className="text-center w-full my-16 text-lg desktop:text-xl">
            <div className="yig-black-05-bg flex flex-col items-center rounded-lg shadow-md p-2 desktop:flex-row desktop:items-start desktop:p-5">
                <img
                    className="rounded-lg mb-5 max-w-64	h-64 object-cover"
                    src={
                        data.thumbnail
                            ? data.thumbnail
                            : "./assets/no-image.jpg"
                    }
                    alt="thumbnail"
                />

                <ul className="w-full desktop:pl-8">
                    <li className="flex flex-col w-full py-6 px-3 text-left desktop:grid desktop:grid-cols-5 desktop:py-0">
                        <p className="yig-black-75 yig-black-50-border flex items-center border-b pb-1 desktop:col-span-2 desktop:py-3 desktop:border-b-0 desktop:border-r-2">
                            <img
                                className="w-4 desktop:w-5 mr-2 "
                                src="./assets/title.svg"
                                alt="title"
                            />
                            Title
                        </p>
                        <p className="pt-1 flex items-center desktop:pl-4 desktop:col-span-3">
                            {data.title}
                        </p>
                    </li>
                    <li className="flex flex-col w-full py-6 px-3 text-left desktop:grid desktop:grid-cols-5 desktop:py-0">
                        <p className="yig-black-75 yig-black-50-border flex items-center border-b pb-1 desktop:col-span-2 desktop:py-3 desktop:border-b-0 desktop:border-r-2">
                            <img
                                className="w-4 desktop:w-5 mr-2 "
                                src="./assets/channel.svg"
                                alt="channel"
                            />
                            Channel
                        </p>
                        <p className="pt-1 flex items-center desktop:pl-4 desktop:col-span-3">
                            {data.channel}
                        </p>
                    </li>
                    <li className="flex flex-col w-full py-6 px-3 text-left desktop:grid desktop:grid-cols-5 desktop:py-0">
                        <p className="yig-black-75 yig-black-50-border flex items-center border-b pb-1 desktop:col-span-2 desktop:py-3 desktop:pr-1 desktop:border-b-0 desktop:border-r-2">
                            <img
                                className="w-4 desktop:w-5 mr-2 "
                                src="./assets/creation-date.svg"
                                alt="creation date"
                            />
                            Published Date
                        </p>
                        <p className="pt-1 flex items-center desktop:pl-4 desktop:col-span-3">
                            {data.publishedDate}
                        </p>
                    </li>

                    <li className="flex flex-col w-full py-6 px-3 text-left desktop:grid desktop:grid-cols-5 desktop:py-0">
                        <p className="yig-black-75 yig-black-50-border flex items-center border-b pb-1 desktop:col-span-2 desktop:py-3 desktop:pr-1 desktop:border-b-0 desktop:border-r-2">
                            <img
                                className="w-4 desktop:w-5 mr-2 "
                                src="./assets/videos.svg"
                                alt="videos"
                            />
                            Videos
                        </p>
                        <p className="pt-1 flex items-center desktop:pl-4 desktop:col-span-3">
                            {data.count}
                        </p>
                    </li>

                    <li className="flex justify-center my-8">
                        <a
                            className="hover:saturate-200 transition-all duration-300"
                            href={data.url}
                            target="_blank"
                        >
                            <img src="./assets/link.svg" alt="playlist-link" />
                        </a>
                    </li>
                </ul>
            </div>

            {permitSave === true ? (
                <a
                    className="submit-btn yig-btn yig-first-yellow-bg yig-first-yellow-border yig-black inline-block text-center text-xl desktop:text-2xl py-3 px-6 desktop:py-5 desktop:px-10 m-6 rounded-lg border-2 hover:bg-white shadow-2xl transition-colors duration-300 cursor-pointer"
                    href={
                        "data:," +
                        JSON.stringify(data, null, 4).replace(/#/g, "%23")
                    }
                    download={`${data.title} ${parseDateForFiles(
                        new Date().toJSON()
                    )}.json`}
                    onClick={() => location.reload()}
                >
                    Save Log
                </a>
            ) : (
                <div className="yig-black-05-bg w-full rounded-lg shadow-md flex flex-col p-2 my-14">
                    <p className="p-2 desktop:p-4 text-left">
                        There are some <strong>inaccessible</strong> videos. I
                        suggest checking the details to see which ones they are
                        and either replace or delete them from the playlist. Do
                        you still want to save the log?
                    </p>
                    <div className="flex flex-col desktop:flex-row">
                        <button
                            className="yig-btn yig-error-btn yig-error-color-bg yig-error-color-border yig-white inline-block text-center text-xl desktop:text-2xl py-3 px-6 desktop:py-5 desktop:px-10 m-4 desktop:m-6 rounded-lg border-2 hover:bg-white shadow-2xl transition-colors duration-300 cursor-pointer"
                            onClick={() => setPermitSave(true)}
                        >
                            Proceed
                        </button>
                        <Link
                            className="yig-btn yig-first-yellow-bg yig-first-yellow-border yig-black inline-block text-center text-xl desktop:text-2xl py-3 px-6 desktop:py-5 desktop:px-10 m-4 desktop:m-6 rounded-lg border-2 hover:bg-white shadow-2xl transition-colors duration-300 cursor-pointer"
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
