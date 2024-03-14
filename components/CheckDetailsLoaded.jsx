import VideoTemplate from "./VideoTemplate";

export default function CheckDetailsLoaded({ data }) {
    console.log(data);
    return (
        <table className="w-full border-2 border-black border-collapse my-5 text-left">
            <tbody>
                <tr>
                    <th className="align-top border-2 border-black p-1">
                        Title:
                    </th>
                    <td className="border-2 border-black p-1">{data.title}</td>
                </tr>
                <tr>
                    <th className="align-top border-2 border-black p-1">
                        Channel:
                    </th>
                    <td className="border-2 border-black p-1">
                        {data.channel}
                    </td>
                </tr>
                <tr>
                    <th className="align-top border-2 border-black p-1">
                        Description:
                    </th>
                    <td className="border-2 border-black p-1">
                        {data.description ? data.description : "N/A"}
                    </td>
                </tr>
                <tr>
                    <th className="align-top border-2 border-black p-1">
                        Playlist Link:
                    </th>
                    <td className="border-2 border-black p-1 underline">
                        <a href={data.url} target="_blank">
                            Here
                        </a>
                    </td>
                </tr>
                <tr>
                    <th className="align-top border-2 border-black p-1">
                        Publication Date:
                    </th>
                    <td className="border-2 border-black p-1">
                        {data.publishedDate}
                    </td>
                </tr>
                <tr>
                    <th className="align-top border-2 border-black p-1">
                        Total Duration:
                    </th>
                    <td className="border-2 border-black p-1">
                        {data.fullDuration}
                    </td>
                </tr>
                <tr>
                    <th className="align-top border-2 border-black p-1">
                        Average Duration per Video:
                    </th>
                    <td className="border-2 border-black p-1">
                        {data.averageDuration}
                    </td>
                </tr>
                <tr>
                    <th className="align-top border-2 border-black p-1">
                        Longest Video:
                    </th>
                    <td className="border-2 border-black p-1">
                        <VideoTemplate
                            video={data.shortestVideo}
                            title={true}
                            channel={true}
                            url={true}
                            position={true}
                            duration={true}
                            publishedDate={true}
                            addedDate={true}
                        />
                    </td>
                </tr>
                <tr>
                    <th className="align-top border-2 border-black p-1">
                        ShortestVideo:
                    </th>
                    <td className="border-2 border-black p-1">
                        <VideoTemplate
                            video={data.longestVideo}
                            title={true}
                            channel={true}
                            url={true}
                            position={true}
                            duration={true}
                            publishedDate={true}
                            addedDate={true}
                        />
                        {/* <ul className="bg-slate-200 my-2 p-1 rounded">
                            <li>
                                <span className="font-bold">Title:</span>{" "}
                                {data.shortestVideo?.title}
                            </li>
                            <li>
                                <span className="font-bold">Channel:</span>{" "}
                                {data.shortestVideo?.channel}
                            </li>
                            <li>
                                <a
                                    className="font-bold underline"
                                    href={data.shortestVideo?.url}
                                    target="_blank"
                                >
                                    Video Link
                                </a>
                            </li>
                            <li>
                                <span className="font-bold">Position:</span>{" "}
                                {data.shortestVideo?.position}
                            </li>
                            <li>
                                <span className="font-bold">Duration:</span>{" "}
                                {data.shortestVideo?.duration}
                            </li>
                            <li>
                                <span className="font-bold">
                                    Publication Date:
                                </span>{" "}
                                {data.shortestVideo?.publishedDate}
                            </li>
                            <li>
                                <span className="font-bold">Added Date:</span>{" "}
                                {data.shortestVideo?.addedDate}
                            </li>
                        </ul> */}
                    </td>
                </tr>
                <tr>
                    <th className="align-top border-2 border-black p-1">
                        Unlisted Videos ({data.unlistedVideos?.length}):
                    </th>
                    <td className="border-2 border-black p-1">
                        {data.unlistedVideos?.length > 0
                            ? data.unlistedVideos.map((video, index) => (
                                  <VideoTemplate
                                      key={index}
                                      video={video}
                                      title={true}
                                      channel={true}
                                      url={true}
                                      position={true}
                                      // duration={true}
                                      publishedDate={true}
                                      addedDate={true}
                                  />
                              ))
                            : "N/A"}
                    </td>
                </tr>
                <tr>
                    <th className="align-top border-2 border-black p-1">
                        Private Videos ({data.privateVideos?.length}):
                    </th>
                    <td className="border-2 border-black p-1">
                        {data.privateVideos?.length > 0
                            ? data.privateVideos.map((video, index) => (
                                  <VideoTemplate
                                      key={index}
                                      video={video}
                                      id={true}
                                      url={true}
                                      position={true}
                                      addedDate={true}
                                  />
                              ))
                            : "N/A"}
                    </td>
                </tr>
                <tr>
                    <th className="align-top border-2 border-black p-1">
                        Deleted Videos ({data.deletedVideos?.length}):
                    </th>
                    <td className="border-2 border-black p-1">
                        {data.deletedVideos?.length > 0
                            ? data.deletedVideos.map((video, index) => (
                                  <VideoTemplate
                                      key={index}
                                      video={video}
                                      id={true}
                                      url={true}
                                      position={true}
                                      addedDate={true}
                                  />
                              ))
                            : "N/A"}
                    </td>
                </tr>
            </tbody>
        </table>
    );
}
// }
