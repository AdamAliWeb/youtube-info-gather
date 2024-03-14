import { decodeFromSeconds, retriveDuration, parseDate } from "./utilities";

export const dataVideosParser = (playlistData, playlistVideos, videosData) => {
    const parsedData = {};

    try {
        let playlist = playlistData.items[0],
            minDuration = Math.min(...retriveDuration(videosData)),
            maxDuration = Math.max(...retriveDuration(videosData)),
            minDurationObject =
                videosData[retriveDuration(videosData).indexOf(minDuration)],
            maxDurationObject =
                videosData[retriveDuration(videosData).indexOf(maxDuration)];

        parsedData.id = playlist.id;
        parsedData.url = `https://www.youtube.com/playlist?list=${playlist.id}`;
        parsedData.title = playlist.snippet.title;
        parsedData.description = playlist.snippet.description;
        parsedData.channel = playlist.snippet.channelTitle;
        parsedData.publishedDate = parseDate(playlist.snippet.publishedAt);

        // console.log(videosData);
        parsedData.fullDuration = decodeFromSeconds(
            retriveDuration(videosData).reduce((a, b) => a + b)
        );

        parsedData.averageDuration = decodeFromSeconds(
            retriveDuration(videosData).reduce((a, b) => a + b) /
                videosData.length
        );

        parsedData.longestVideo = {
            title: maxDurationObject.snippet.title,
            url: `https://www.youtube.com/watch?v=${maxDurationObject.id}`,
            channel: maxDurationObject.snippet.channelTitle,
            position:
                playlistVideos.find(
                    (video) =>
                        video.snippet.resourceId.videoId ===
                        maxDurationObject.id
                ).snippet.position + 1,
            duration: decodeFromSeconds(maxDuration),
            publishedDate: parseDate(maxDurationObject.snippet.publishedAt),
            addedDate: parseDate(
                playlistVideos.find(
                    (video) =>
                        video.snippet.resourceId.videoId ===
                        maxDurationObject.id
                ).snippet.publishedAt
            ),
        };

        parsedData.shortestVideo = {
            title: minDurationObject.snippet.title,
            channel: minDurationObject.snippet.channelTitle,
            url: `https://www.youtube.com/watch?v=${minDurationObject.id}`,
            position:
                playlistVideos.find(
                    (video) =>
                        video.snippet.resourceId.videoId ===
                        minDurationObject.id
                ).snippet.position + 1,
            duration: decodeFromSeconds(minDuration),
            publishedDate: parseDate(minDurationObject.snippet.publishedAt),
            addedDate: parseDate(
                playlistVideos.find(
                    (video) =>
                        video.snippet.resourceId.videoId ===
                        minDurationObject.id
                ).snippet.publishedAt
            ),
        };

        parsedData.unlistedVideos = [];
        parsedData.privateVideos = [];
        parsedData.deletedVideos = [];

        console.log(parseDate.longestVideo);

        playlistVideos.forEach((video) => {
            const statuses = {
                unlisted: parsedData.unlistedVideos,
                private: parsedData.privateVideos,
                privacyStatusUnspecified: parsedData.deletedVideos,
            };

            if (statuses[video.status.privacyStatus]) {
                let parsedVideo = {
                    id: video.snippet.resourceId.videoId,
                    title: video.snippet.title,
                    channel: video.snippet.videoOwnerChannelTitle,
                    position: video.snippet.position + 1,
                    publishedDate: parseDate(
                        video.contentDetails.videoPublishedAt
                    ),
                    addedDate: parseDate(video.snippet.publishedAt),
                    url: `https://www.youtube.com/watch?v=${video.snippet.resourceId.videoId}`,
                };

                statuses[video.status.privacyStatus].push(parsedVideo);
            }
        });

        return parsedData;
    } catch (error) {
        console.error(error);
    }
};
