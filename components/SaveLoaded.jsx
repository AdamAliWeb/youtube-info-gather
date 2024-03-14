import { parseDateForFiles } from "../helpers/utilities";

export default function SaveLoaded({ data }) {
    return (
        <section className="text-center p-2">
            {console.log(data)}
            <ul className="bg-slate-200 my-1 md:my-2 p-2 md:p-4 rounded">
                <li c>
                    <span className="font-bold">Title: </span>
                    {data.title}
                </li>
                <li>
                    <span className="font-bold">Channel: </span>
                    {data.channel}
                </li>
                <li>
                    <span className="font-bold">Published Date: </span>
                    {data.publishedDate}
                </li>
                <li>
                    <span className="font-bold">Videos: </span>
                    {data.count}
                </li>
                <li>
                    <a
                        className="font-bold underline"
                        href={data.url}
                        target="_blank"
                    >
                        Playlist Link
                    </a>
                </li>
            </ul>
            <a
                className="submit-btn inline-block bg-amber-500 text-white text-center py-1 px-4 md:py-2 md:px-5 m-2 md:mt-4 rounded-full font-bold border-black border-2 hover:bg-white hover:text-amber-500 transition-colors duration-300"
                href={"data:," + JSON.stringify(data, null, 4)}
                download={`${data.title} ${parseDateForFiles(
                    new Date().toJSON()
                )}.json`}
                onClick={() => location.reload()}
            >
                Save
            </a>
        </section>
    );
}
