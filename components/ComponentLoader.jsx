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
        if (!loading && !failedResponse[1]) {
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
                <img src="./assets/loading.svg" alt="Loading" />
                <p>Loading...</p>
            </div>
        );
    } else if (failedResponse[1]) {
        document.querySelector(".submit-btn").disabled = false;
        return (
            <div className="w-full my-4 max-w-screen-lg bg-red-200 rounded">
                <p className="p-2  text-center">{failedResponse[0]}</p>
            </div>
        );
    } else if (data !== undefined && Object.keys(data).length !== 0) {
        document.querySelector(".submit-btn").disabled = false;
        return <ComponentToLoad data={data} />;
    }
}
