export default function urlParser(url) {
    const idRegex = /[?&]list=([^&]+)/i;
    return url.match(idRegex)[1];
}
