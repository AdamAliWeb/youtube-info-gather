export default function VideoTemplate({
    video,
    availability,
    // title,
    // id,
    // channel,
    // url,
    // position,
    // duration,
    // publishedDate,
    // addedDate,
}) {
    if (video?.title) {
        {
            console.log(video.thumbnail);
        }
        return (
            <div className="yig-black-05-bg flex flex-col items-center rounded-lg shadow-md p-2 my-10 desktop:flex-row desktop:items-start desktop:p-5">
                <img
                    className="rounded-lg mb-5 max-w-64	h-64 object-cover"
                    src={
                        video.thumbnail !== null
                            ? video.thumbnail
                            : "./assets/no-image.jpg"
                    }
                    alt="thumbnail"
                />

                <ul className="w-full desktop:pl-8">
                    {video?.title && availability && (
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
                                {video.title}
                            </p>
                        </li>
                    )}

                    {video?.title && !availability && (
                        <li className="flex flex-col w-full py-6 px-3 text-left desktop:grid desktop:grid-cols-5 desktop:py-0">
                            <p className="yig-black-75 yig-black-50-border flex items-center border-b pb-1 desktop:col-span-2 desktop:py-3 desktop:border-b-0 desktop:border-r-2">
                                <img
                                    className="w-4 desktop:w-5 mr-2 "
                                    src="./assets/title.svg"
                                    alt="title"
                                />
                                ID
                            </p>
                            <p className="pt-1 flex items-center desktop:pl-4 desktop:col-span-3">
                                {video.id}
                            </p>
                        </li>
                    )}

                    {video?.channel && (
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
                                {video.channel}
                            </p>
                        </li>
                    )}

                    {video?.duration && (
                        <li className="flex flex-col w-full py-6 px-3 text-left desktop:grid desktop:grid-cols-5 desktop:py-0">
                            <p className="yig-black-75 yig-black-50-border flex items-center border-b pb-1 desktop:col-span-2 desktop:py-3 desktop:pr-1 desktop:border-b-0 desktop:border-r-2">
                                <img
                                    className="w-4 desktop:w-5 mr-2 "
                                    src="./assets/duration-black.svg"
                                    alt="creation date"
                                />
                                Duration
                            </p>
                            <p className="pt-1 flex items-center desktop:pl-4 desktop:col-span-3">
                                {video.duration}
                            </p>
                        </li>
                    )}

                    {video?.publishedDate && availability && (
                        <li className="flex flex-col w-full py-6 px-3 text-left desktop:grid desktop:grid-cols-5 desktop:py-0">
                            <p className="yig-black-75 yig-black-50-border flex items-center border-b pb-1 desktop:col-span-2 desktop:py-3 desktop:pr-1 desktop:border-b-0 desktop:border-r-2">
                                <img
                                    className="w-4 desktop:w-5 mr-2 "
                                    src="./assets/creation-date.svg"
                                    alt="creation date"
                                />
                                Publication Date
                            </p>
                            <p className="pt-1 flex items-center desktop:pl-4 desktop:col-span-3">
                                {video.publishedDate}
                            </p>
                        </li>
                    )}

                    {video?.addedDate && (
                        <li className="flex flex-col w-full py-6 px-3 text-left desktop:grid desktop:grid-cols-5 desktop:py-0">
                            <p className="yig-black-75 yig-black-50-border flex items-center border-b pb-1 desktop:col-span-2 desktop:py-3 desktop:pr-1 desktop:border-b-0 desktop:border-r-2">
                                <img
                                    className="w-4 desktop:w-5 mr-2 "
                                    src="./assets/addition-date.svg"
                                    alt="creation date"
                                />
                                Addition Date
                            </p>
                            <p className="pt-1 flex items-center desktop:pl-4 desktop:col-span-3">
                                {video.addedDate}
                            </p>
                        </li>
                    )}

                    {video?.position && (
                        <li className="flex flex-col w-full py-6 px-3 text-left desktop:grid desktop:grid-cols-5 desktop:py-0">
                            <p className="yig-black-75 yig-black-50-border flex items-center border-b pb-1 desktop:col-span-2 desktop:py-3 desktop:border-b-0 desktop:border-r-2">
                                <img
                                    className="w-4 desktop:w-5 mr-2 "
                                    src="./assets/position.svg"
                                    alt="title"
                                />
                                Position
                            </p>
                            <p className="pt-1 flex items-center desktop:pl-4 desktop:col-span-3">
                                {video.position}
                            </p>
                        </li>
                    )}

                    {video?.url && (
                        <li className="flex justify-center my-8">
                            <a
                                className="hover:saturate-200 transition-all duration-300"
                                href={video.url}
                                target="_blank"
                            >
                                <img
                                    src="./assets/link.svg"
                                    alt="playlist-link"
                                />
                            </a>
                        </li>
                    )}
                </ul>
            </div>
            // <ul className="bg-slate-200 my-1 md:my-2 p-1 rounded">
            //     {title && (
            //         <li>
            //             <h4>
            //                 <span className="font-bold">Title: </span>
            //                 {video.title}
            //             </h4>
            //         </li>
            //     )}
            //     {channel && (
            //         <li>
            //             <span className="font-bold">Channel: </span>
            //             {video.channel}
            //         </li>
            //     )}
            //     {id && (
            //         <li>
            //             <span className="font-bold">ID: </span>
            //             {video.id}
            //         </li>
            //     )}
            //     {url && (
            //         <li>
            //             <a
            //                 className="font-bold underline"
            //                 href={video.url}
            //                 target="_blank"
            //             >
            //                 Video Link
            //             </a>
            //         </li>
            //     )}
            //     {position && (
            //         <li>
            //             <span className="font-bold">Position: </span>
            //             {video.position}
            //         </li>
            //     )}
            //     {duration && (
            //         <li>
            //             <span className="font-bold">Duration: </span>
            //             {video.duration}
            //         </li>
            //     )}
            //     {publishedDate && (
            //         <li>
            //             <span className="font-bold">Publication Date: </span>
            //             {video.publishedDate}
            //         </li>
            //     )}
            //     {addedDate && (
            //         <li>
            //             <span className="font-bold">Added Date: </span>
            //             {video.addedDate}
            //         </li>
            //     )}
            // </ul>
        );
    }
}
