export const urlParser = (url) => {
    const idRegex = /[?&]list=([^&]+)/i;
    return url.match(idRegex) ? url.match(idRegex)[1] : "";
};

export const findThumbnail = (thumb) => {
    if (thumb?.high) {
        return thumb.high.url;
    } else if (thumb?.medium) {
        return thumb.medium.url;
    } else if (thumb?.default) {
        return thumb.default.url;
    } else return null;
};

export const detectHiddenVideos = (arr = []) =>
    arr.some(
        (video) =>
            video.status === "unlisted" ||
            video.status === "private" ||
            video.status === "privacyStatusUnspecified"
    );

export const secondsConverter = {
    W: 604800,
    D: 86400,
    H: 3600,
    M: 60,
    S: 1,
};

export const timeStamps = {
    W: ["Week", "Weeks"],
    D: ["Day", "Days"],
    H: ["Hour", "Hours"],
    M: ["Minute", "Minutes"],
    S: ["Second", "Seconds"],
};

export const encodeToSeconds = (time) => {
    const timeRegex = /(\d+[SMHDWY])/g;
    let timeSplitted = time
        .match(timeRegex)
        .map((el) => parseInt(el) * secondsConverter[el.slice(-1)])
        .reduce((a, b) => a + b);
    return timeSplitted;
};

export const decodeFromSeconds = (time) => {
    let timeParsed = "";
    let timeLeft = time;
    for (const format in secondsConverter) {
        if (time > secondsConverter[format]) {
            let formatedTime = parseInt(timeLeft / secondsConverter[format]);

            let stringTime =
                formatedTime <= 0
                    ? ""
                    : formatedTime > 1
                    ? timeStamps[format][1]
                    : timeStamps[format][0];
            timeLeft = timeLeft - secondsConverter[format] * formatedTime;

            timeParsed += `${
                formatedTime <= 0 ? "" : formatedTime
            } ${stringTime} `;
        }
    }

    return timeParsed.trim();
};

export const retriveDuration = (arr) =>
    arr.map((video) => encodeToSeconds(video.contentDetails.duration));

export const parseDateForFiles = (dateISO) => {
    let date = new Date(dateISO);
    let newDate = `${date.getDate()}-${
        date.getMonth() + 1
    }-${date.getFullYear()} ${date.getHours()}-${
        date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()
    }`;
    return newDate;
};

export const parseDate = (dateISO) => {
    const monthsOfTheYear = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];
    let date = new Date(dateISO);
    let newDate = `${date.getDate()} ${
        monthsOfTheYear[date.getMonth()]
    } ${date.getFullYear()}`;
    return newDate;
};
