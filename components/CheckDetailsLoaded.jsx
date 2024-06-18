import VideoTemplate from "./VideoTemplate";

export default function CheckDetailsLoaded({ data }) {
    return (
        <section className="text-center w-full my-16 desktop:text-lg">
            <div className="yig-black-05-bg rounded-lg shadow-md p-2 desktop:p-5">
                <article className="flex flex-col items-center desktop:flex-row desktop:items-start">
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
                                <img
                                    src="./assets/link.svg"
                                    alt="playlist-link"
                                />
                            </a>
                        </li>
                    </ul>
                </article>
                <article className="p-3 my-8 flex flex-col desktop:flex-row">
                    <aside>
                        <div className="yig-white-bg p-3 rounded-lg my-6 text-left shadow-lg">
                            <div className="yig-second-blue-bg flex p-2 rounded-lg">
                                <img
                                    className="w-4 desktop:w-5 mr-2 "
                                    src="./assets/duration-white.svg"
                                    alt=""
                                />
                                <p className="yig-white">Total Duration</p>
                            </div>
                            <p className="p-1 mt-2 desktop:p-2">
                                {data.fullDuration}
                            </p>
                        </div>
                        <div className="yig-white-bg p-3 rounded-lg my-6 text-left shadow-lg">
                            <div className="yig-second-blue-bg flex p-2 rounded-lg">
                                <img
                                    className="w-4 desktop:w-5 mr-2 "
                                    src="./assets/average-time.svg"
                                    alt=""
                                />
                                <p className="yig-white">
                                    Average Video Duration
                                </p>
                            </div>
                            <p className="p-1 mt-2 desktop:p-2">
                                {data.averageDuration}
                            </p>
                        </div>
                    </aside>
                    <aside className="w-full my-6 desktop:pl-10 desktop:pr-5">
                        <p className="yig-black-75 yig-black-50-border flex items-center border-b pb-2 desktop:col-span-2 desktop:pb-3 desktop:pr-1">
                            <img
                                className="w-4 desktop:w-5 mr-2 "
                                src="./assets/description.svg"
                                alt="videos"
                            />
                            Description
                        </p>
                        <p className="text-left pt-2 desktop:pt-3">
                            {data.description
                                ? data.description
                                : "No Description"}
                        </p>
                    </aside>
                    {/* <tr>
                        //{" "}
                        <th className="align-top border-2 border-black p-1">
                            // Total Duration: //{" "}
                        </th>
                        //{" "}
                        <td className="border-2 border-black p-1">
                            // {data.fullDuration}
                            //{" "}
                        </td>
                        //{" "}
                    </tr>
                    //{" "}
                    <tr>
                        //{" "}
                        <th className="align-top border-2 border-black p-1">
                            // Average Duration per Video: //{" "}
                        </th>
                        //{" "}
                        <td className="border-2 border-black p-1">
                            // {data.averageDuration}
                            //{" "}
                        </td>
                        //{" "}
                    </tr> */}
                </article>
            </div>

            <h3 className="my-12 text-3xl desktop:text-6xl">Longest Video</h3>
            <VideoTemplate video={data.longestVideo} availability={true} />

            <h3 className="my-12 text-3xl desktop:text-6xl">Shortest Video</h3>
            <VideoTemplate video={data.shortestVideo} availability={true} />

            <h3 className="my-12 text-3xl desktop:text-6xl">
                Unlisted Videos{" "}
                <strong className="yig-second-blue">
                    {data.unlistedVideos?.length}
                </strong>
            </h3>
            {data.unlistedVideos?.length > 0 ? (
                data.unlistedVideos.map((video, index) => (
                    <VideoTemplate
                        video={video}
                        availability={true}
                        key={index}
                    />
                ))
            ) : (
                <div className="yig-fade-in w-full flex items-center px-3 py-6 desktop:px-6 my-10 yig-black-05-bg rounded-lg shadow-lg">
                    <img
                        className="pr-3 desktop:w-12"
                        src="./assets/check.svg"
                        alt="warning"
                    />
                    <p>
                        The playlist does not contain any{" "}
                        <strong>unlisted</strong> videos.
                    </p>
                </div>
            )}

            <h3 className="my-12 text-3xl desktop:text-6xl">
                Private Videos{" "}
                <strong className="yig-second-blue">
                    {data.privateVideos?.length}
                </strong>
            </h3>
            {data.privateVideos?.length > 0 ? (
                data.privateVideos.map((video, index) => (
                    <VideoTemplate
                        video={video}
                        availability={false}
                        key={index}
                    />
                ))
            ) : (
                <div className="yig-fade-in w-full flex items-center px-3 py-6 desktop:px-6 my-10 yig-black-05-bg rounded-lg shadow-lg">
                    <img
                        className="pr-3 desktop:w-12"
                        src="./assets/check.svg"
                        alt="warning"
                    />
                    <p>
                        The playlist does not contain any{" "}
                        <strong>private</strong> videos.
                    </p>
                </div>
            )}

            <h3 className="my-12 text-3xl desktop:text-6xl">
                Deleted Videos{" "}
                <strong className="yig-second-blue">
                    {data.deletedVideos?.length}
                </strong>
            </h3>
            {data.deletedVideos?.length > 0 ? (
                data.deletedVideos.map((video, index) => (
                    <VideoTemplate
                        video={video}
                        availability={false}
                        key={index}
                    />
                ))
            ) : (
                <div className="yig-fade-in w-full flex items-center px-3 py-6 desktop:px-6 my-10 yig-black-05-bg rounded-lg shadow-lg">
                    <img
                        className="pr-3 desktop:w-12"
                        src="./assets/check.svg"
                        alt="warning"
                    />
                    <p>
                        The playlist does not contain any{" "}
                        <strong>deleted</strong> videos.
                    </p>
                </div>
            )}
        </section>
        // <table className="w-full border-2 border-black border-collapse my-5 text-left">
        //     <tbody>
        //         <tr>
        //             <th className="align-top border-2 border-black p-1">
        //                 Title:
        //             </th>
        //             <td className="border-2 border-black p-1">{data.title}</td>
        //         </tr>
        //         <tr>
        //             <th className="align-top border-2 border-black p-1">
        //                 Channel:
        //             </th>
        //             <td className="border-2 border-black p-1">
        //                 {data.channel}
        //             </td>
        //         </tr>
        //         <tr>
        //             <th className="align-top border-2 border-black p-1">
        //                 Description:
        //             </th>
        //             <td className="border-2 border-black p-1">
        //                 {data.description ? data.description : "N/A"}
        //             </td>
        //         </tr>
        //         <tr>
        //             <th className="align-top border-2 border-black p-1">
        //                 Playlist Link:
        //             </th>
        //             <td className="border-2 border-black p-1 underline">
        //                 <a href={data.url} target="_blank">
        //                     Here
        //                 </a>
        //             </td>
        //         </tr>
        //         <tr>
        //             <th className="align-top border-2 border-black p-1">
        //                 Publication Date:
        //             </th>
        //             <td className="border-2 border-black p-1">
        //                 {data.publishedDate}
        //             </td>
        //         </tr>
        //         <tr>
        //             <th className="align-top border-2 border-black p-1">
        //                 Total Duration:
        //             </th>
        //             <td className="border-2 border-black p-1">
        //                 {data.fullDuration}
        //             </td>
        //         </tr>
        //         <tr>
        //             <th className="align-top border-2 border-black p-1">
        //                 Average Duration per Video:
        //             </th>
        //             <td className="border-2 border-black p-1">
        //                 {data.averageDuration}
        //             </td>
        //         </tr>
        //         <tr>
        //             <th className="align-top border-2 border-black p-1">
        //                 Longest Video:
        //             </th>
        //             <td className="border-2 border-black p-1">
        //                 <VideoTemplate
        //                     video={data.longestVideo}
        //                     title={true}
        //                     channel={true}
        //                     url={true}
        //                     position={true}
        //                     duration={true}
        //                     publishedDate={true}
        //                     addedDate={true}
        //                 />
        //             </td>
        //         </tr>
        //         <tr>
        //             <th className="align-top border-2 border-black p-1">
        //                 ShortestVideo:
        //             </th>
        //             <td className="border-2 border-black p-1">
        //                 <VideoTemplate
        //                     video={data.shortestVideo}
        //                     title={true}
        //                     channel={true}
        //                     url={true}
        //                     position={true}
        //                     duration={true}
        //                     publishedDate={true}
        //                     addedDate={true}
        //                 />
        //             </td>
        //         </tr>
        //         <tr>
        //             <th className="align-top border-2 border-black p-1">
        //                 Unlisted Videos ({data.unlistedVideos?.length}):
        //             </th>
        //             <td className="border-2 border-black p-1">
        //                 {data.unlistedVideos?.length > 0
        //                     ? data.unlistedVideos.map((video, index) => (
        //                           <VideoTemplate
        //                               key={index}
        //                               video={video}
        //                               title={true}
        //                               channel={true}
        //                               url={true}
        //                               position={true}
        //                               // duration={true}
        //                               publishedDate={true}
        //                               addedDate={true}
        //                           />
        //                       ))
        //                     : "N/A"}
        //             </td>
        //         </tr>
        //         <tr>
        //             <th className="align-top border-2 border-black p-1">
        //                 Private Videos ({data.privateVideos?.length}):
        //             </th>
        //             <td className="border-2 border-black p-1">
        //                 {data.privateVideos?.length > 0
        //                     ? data.privateVideos.map((video, index) => (
        //                           <VideoTemplate
        //                               key={index}
        //                               video={video}
        //                               id={true}
        //                               url={true}
        //                               position={true}
        //                               addedDate={true}
        //                           />
        //                       ))
        //                     : "N/A"}
        //             </td>
        //         </tr>
        //         <tr>
        //             <th className="align-top border-2 border-black p-1">
        //                 Deleted Videos ({data.deletedVideos?.length}):
        //             </th>
        //             <td className="border-2 border-black p-1">
        //                 {data.deletedVideos?.length > 0
        //                     ? data.deletedVideos.map((video, index) => (
        //                           <VideoTemplate
        //                               key={index}
        //                               video={video}
        //                               id={true}
        //                               url={true}
        //                               position={true}
        //                               addedDate={true}
        //                           />
        //                       ))
        //                     : "N/A"}
        //             </td>
        //         </tr>
        //     </tbody>
        // </table>
    );
}
// }
