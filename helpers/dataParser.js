const dataStructure = {
    id: "",
    title: "",
    description: "",
    channel: "",
    publishedDate: new Date(),
};

export const dataParser = (videosData, playlistData) => {
    const parsedData = dataStructure;

    try {
        if (playlistData.kind !== "youtube#playlistListResponse")
            throw new Error("The type of the url is invalid");

        parsedData.id = playlistData.items[0].id;
        parsedData.title = playlistData.items[0].snippet.title;
        parsedData.description = playlistData.items[0].snippet.description;
        parsedData.channel = playlistData.items[0].snippet.channelTitle;
        parsedData.publishedDate = new Date(
            playlistData.items[0].snippet.publishedAt
        );
    } catch (error) {
        console.error(error);
    }

    return parsedData;
};
