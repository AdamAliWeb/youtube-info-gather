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
            </div>
        );
    } else if (failedResponse[1]) {
        document.querySelector(".submit-btn").disabled = false;
        return (
            <div className="yig-fade-in w-full flex items-center px-3 py-6 desktop:px-6 my-10 yig-black-10-bg rounded-lg shadow-lg">
                <img
                    className="pr-3 desktop:w-12"
                    src="./assets/error.svg"
                    alt="error"
                />
                <p>{failedResponse[0]}</p>
            </div>
        );
    } else if (data !== undefined && Object.keys(data).length !== 0) {
        document.querySelector(".submit-btn").disabled = false;
        return <ComponentToLoad data={data} />;
    }
}
