import { urlParser } from "../helpers/utilities";
import useYoutubeApi from "../hooks/useYoutubeApi";
import { useEffect, useState } from "react";

export default function ComponentLoader({ url, dataParser, ComponentToLoad }) {
    const [
        youtubePlaylistData,
        youtubePlaylistVideos,
        youtubeVideosData,
        failedResponse,
        loading,
    ] = useYoutubeApi(urlParser(url));
    const [data, setData] = useState({});

    useEffect(() => {
        if (!loading && !failedResponse) {
            let parsedData = dataParser(
                youtubePlaylistData,
                youtubePlaylistVideos,
                youtubeVideosData
            );

            setData(parsedData);
        }
    }, [loading]);

    if (loading) {
        return (
            <div className="flex flex-col items-center my-5">
                <img src="./loading.svg" alt="Loading" />
                <p>Loading...</p>
            </div>
        );
    } else if (failedResponse) {
        return (
            <div className="w-full my-4 max-w-screen-md bg-red-200 rounded">
                <p className="p-2  text-center">
                    Something went wrong with the request. Make sure the url is
                    written correctly or the playlist is public or hidden.
                </p>
            </div>
        );
    } else if (Object.keys(data).length !== 0) {
        return <ComponentToLoad data={data} />;
    }
}
