import { useEffect, useState } from "react";
import { dataParser } from "../helpers/dataParser";

const BASE_VIDEOS_URL = "https://www.googleapis.com/youtube/v3/playlistItems",
    BASE_PLAYLIST_URL = "https://www.googleapis.com/youtube/v3/playlists",
    KEY = "AIzaSyBkRd7Fk6h79GnNn0VQzIb7wVjVtciw7Zk",
    PART = "snippet",
    PAGE_TOKEN = "",
    MAX_RESULTS = "50";

const FETCH_VIDEOS_URL = `${BASE_VIDEOS_URL}?key=${KEY}&part=${PART}&maxResults=${MAX_RESULTS}`;
const FETCH_PLAYLIST_URL = `${BASE_PLAYLIST_URL}?key=${KEY}&part=${PART}`;

export default function useYoutubeApi(playlistId) {
    const [youtubeVideosData, setYoutubeVideosData] = useState({});
    const [youtubePlaylistData, setYoutubePlaylistData] = useState({});

    const fetchVideosData = async (url) => {
        const response = await fetch(url);

        return await response.json();
    };

    useEffect(() => {
        const getData = async () => {
            let videosData = await fetchVideosData(
                `${FETCH_VIDEOS_URL}&playlistId=${playlistId}`
            );
            let playlistData = await fetchVideosData(
                `${FETCH_PLAYLIST_URL}&id=${playlistId}`
            );

            setYoutubeVideosData(videosData);
            setYoutubePlaylistData(playlistData);
        };

        getData();
    }, []);

    const debugVideosData = () => {
        console.log(youtubeVideosData);
    };

    const debugPlaylistData = () => {
        console.log(youtubePlaylistData);
    };

    const parseData = () => {
        return dataParser(youtubeVideosData, youtubePlaylistData);
    };

    return [debugVideosData, debugPlaylistData, parseData];
}
