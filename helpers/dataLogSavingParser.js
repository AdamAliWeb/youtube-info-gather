import {
    decodeFromSeconds,
    encodeToSeconds,
    findThumbnail,
    parseDate,
} from "./utilities";

export const dataLogSavingParser = (
    playlistData,
    playlistVideos,
    videosData
) => {
    const parsedData = {};

    try {
        let playlist = playlistData.items[0];

        parsedData.id = playlist.id;
        parsedData.title = playlist.snippet.title;
        parsedData.description = playlist.snippet.description;
        parsedData.channel = playlist.snippet.channelTitle;
        parsedData.count = playlist.contentDetails.itemCount;
        parsedData.publishedDate = parseDate(playlist.snippet.publishedAt);
        parsedData.url = `https://www.youtube.com/playlist?list=${parsedData.id}`;
        parsedData.thumbnail = findThumbnail(playlist.snippet.thumbnails);

        parsedData.videos = [];

        parsedData.videos = playlistVideos.map((el, index) => {
            let videoData = videosData.find(
                (video) => video.id === el.snippet.resourceId.videoId
            );

            return {
                title: el.snippet.title,
                url: `https://www.youtube.com/watch?v=${el.snippet.resourceId.videoId}`,
                channel: el.snippet.videoOwnerChannelTitle,
                duration: videoData
                    ? decodeFromSeconds(
                          encodeToSeconds(videoData.contentDetails.duration)
                      )
                    : "",

                position: el.snippet.position + 1,
                publishedDate: parseDate(el.contentDetails.videoPublishedAt),
                addedDate: parseDate(el.snippet.publishedAt),
                status: el.status.privacyStatus,
            };
        });
    } catch (error) {
        console.log(error);
    }

    return parsedData;
};
