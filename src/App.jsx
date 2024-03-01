import "./App.css";
import useYoutubeApi from "../hooks/useYoutubeApi";
import useForm from "../hooks/useForm";
import urlParser from "../helpers/urlParser";

function App() {
    const [debugVideosData, debugPlaylistData, parseData] = useYoutubeApi(
        "PLAsr4GZLmdlom9Kq8qRGgazmzpjnsxEfj"
    );

    const { form, errors, response, handleChange, handleBlur, handleSubmit } =
        useForm({
            url: "",
        });

    return (
        <>
            <h1>Youtube Gather Info</h1>
            <p>Insert the url of a playlist to parse it and save it</p>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="url"
                    placeholder="url"
                    required
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={form.url}
                />

                <input type="submit" className="submit-btn" value="Submit" />
                {errors.url ? (
                    <p className="error-message">{errors.url}</p>
                ) : null}
                {response[0] ? (
                    <p
                        className={`request ${
                            response[1] ? "success" : "error"
                        }`}
                    >
                        {response[0]}
                    </p>
                ) : null}
            </form>

            <div>
                <button onClick={() => debugVideosData()}>Videos</button>
                <button onClick={() => debugPlaylistData()}>Playlist</button>
                {console.log(response)}
                {response[1] && (
                    <a
                        href={"data:," + JSON.stringify(parseData())}
                        download="hola.json"
                        onClick={() => {
                            console.log(JSON.stringify(parseData()));
                        }}
                    >
                        Save {urlParser(form.url)}
                    </a>
                )}
            </div>
        </>
    );
}

export default App;
