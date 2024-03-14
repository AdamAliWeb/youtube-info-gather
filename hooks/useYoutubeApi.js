import { useEffect, useState } from "react";

const BASE_PLAYLIST_URL = "https://www.googleapis.com/youtube/v3/playlists",
    BASE_PLAYLIST_VIDEOS_URL =
        "https://www.googleapis.com/youtube/v3/playlistItems",
    BASE_VIDEOS_URL = "https://www.googleapis.com/youtube/v3/videos",
    KEY = "AIzaSyBkRd7Fk6h79GnNn0VQzIb7wVjVtciw7Zk",
    PART = "snippet,status,contentDetails",
    MAX_RESULTS = "50";

const FETCH_PLAYLIST_URL = `${BASE_PLAYLIST_URL}?key=${KEY}&part=${PART}`;
const FETCH_PLAYLIST_VIDEOS_URL = `${BASE_PLAYLIST_VIDEOS_URL}?key=${KEY}&part=${PART}&maxResults=${MAX_RESULTS}`;
const FETCH_VIDEOS_URL = `${BASE_VIDEOS_URL}?key=${KEY}&part=${PART}`;

const splitArray = (array, quantity) => {
    var result = [];
    for (let i = 0; i < array.length; i += quantity) {
        result.push(array.slice(i, i + quantity));
    }
    return result;
};

export default function useYoutubeApi(playlistId) {
    const [youtubePlaylistData, setYoutubePlaylistData] = useState({});
    const [youtubePlaylistVideos, setYoutubePlaylistVideos] = useState([]);
    const [youtubeVideosData, setYoutubeVideosData] = useState([]);
    const [failedResponse, setFailedResponse] = useState(false);
    const [loading, setLoading] = useState(true);

    const fetchData = async (url) => {
        try {
            const response = await fetch(url);
            return await response.json();
        } catch (error) {
            console.log(error, "cuidao alfredo");
        }
    };

    useEffect(() => {
        const getPlaylistData = async () => {
            try {
                let playlistData = await fetchData(
                    `${FETCH_PLAYLIST_URL}&id=${playlistId}`
                );

                setYoutubePlaylistData(playlistData);
            } catch (error) {
                console.log(error, "no creo");
            }
        };

        const getVideosData = async (playlistVideos) => {
            try {
                let ids = "";
                let videosData = [];

                playlistVideos.forEach((el) => {
                    ids += `${el.snippet.resourceId.videoId},`;
                });

                ids = ids.split(",").filter((el) => el);

                const promises = splitArray(ids, 50).map(async (list) => {
                    const request = await fetchData(
                        `${FETCH_VIDEOS_URL}&id=${list.join(",")}`
                    );
                    videosData.push(...request.items);
                });

                await Promise.all(promises);

                setYoutubeVideosData(videosData);
                setLoading(false);
            } catch (error) {
                console.log(error, "Dj, dimelo");
            }
        };

        const getPlaylistVideos = async () => {
            try {
                let playlistVideos = [];
                let nextToken = "";
                let videosCount = 50;

                while (true) {
                    let request = await fetchData(
                        `${FETCH_PLAYLIST_VIDEOS_URL}&playlistId=${playlistId}&pageToken=${nextToken}`
                    );

                    playlistVideos.push(...request.items);

                    if (request.pageInfo.totalResults > videosCount) {
                        videosCount += 50;
                        nextToken = request.nextPageToken;
                    } else {
                        setYoutubePlaylistVideos(playlistVideos);
                        getVideosData(playlistVideos);
                        break;
                    }
                }
            } catch (error) {
                setFailedResponse(true);
                setLoading(false);
            }
        };

        getPlaylistData();
        getPlaylistVideos();
    }, []);

    return [
        youtubePlaylistData,
        youtubePlaylistVideos,
        youtubeVideosData,
        failedResponse,
        loading,
    ];
}
