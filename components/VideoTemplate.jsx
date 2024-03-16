export default function VideoTemplate({
    video,
    title,
    id,
    channel,
    url,
    position,
    duration,
    publishedDate,
    addedDate,
}) {
    if (video?.title) {
        return (
            <ul className="bg-slate-200 my-1 md:my-2 p-1 rounded">
                {title && (
                    <li>
                        <h4>
                            <span className="font-bold">Title: </span>
                            {video.title}
                        </h4>
                    </li>
                )}
                {channel && (
                    <li>
                        <span className="font-bold">Channel: </span>
                        {video.channel}
                    </li>
                )}
                {id && (
                    <li>
                        <span className="font-bold">ID: </span>
                        {video.id}
                    </li>
                )}
                {url && (
                    <li>
                        <a
                            className="font-bold underline"
                            href={video.url}
                            target="_blank"
                        >
                            Video Link
                        </a>
                    </li>
                )}
                {position && (
                    <li>
                        <span className="font-bold">Position: </span>
                        {video.position}
                    </li>
                )}
                {duration && (
                    <li>
                        <span className="font-bold">Duration: </span>
                        {video.duration}
                    </li>
                )}
                {publishedDate && (
                    <li>
                        <span className="font-bold">Publication Date: </span>
                        {video.publishedDate}
                    </li>
                )}
                {addedDate && (
                    <li>
                        <span className="font-bold">Added Date: </span>
                        {video.addedDate}
                    </li>
                )}
            </ul>
        );
    }
}
