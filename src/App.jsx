import { HashRouter, Route, Routes } from "react-router-dom";
import MainMenu from "../components/MainMenu";
import PlaylistMenu from "../components/PlaylistMenu";
import Header from "../components/Header";
import FormTemplate from "../components/FormTemplate";
import SaveLoaded from "../components/SaveLoaded";
import CheckDetailsLoaded from "../components/CheckDetailsLoaded";
import ComponentLoader from "../components/ComponentLoader";
import { dataPlaylistParser } from "../helpers/dataPlaylistParser";
import { dataVideosParser } from "../helpers/dataVideosParser";
import Footer from "../components/Footer";

function App() {
    return (
        <div className="min-h-screen flex flex-col justify-between">
            <div className="mb-5">
                <Header />
                <main>
                    <HashRouter>
                        <Routes>
                            <Route index element={<MainMenu />} />
                            <Route path="/playlist" element={<PlaylistMenu />}>
                                <Route
                                    index
                                    path=""
                                    element={
                                        <p className="text-center p-1 md:text-lg max-w-screen-lg">
                                            This is is the playlist section. You
                                            can save information or check the
                                            inner details of a playlist with
                                            this options.
                                        </p>
                                    }
                                />
                                <Route
                                    path="save"
                                    element={
                                        <FormTemplate
                                            formId={"playlist-save-form"}
                                            formTitle={"Save Log Form"}
                                            formDescription={
                                                "*Insert the url and save the playlist information so you can know which videos got deleted on the future or just to compare"
                                            }
                                            dataParser={dataPlaylistParser}
                                            ComponentLoader={ComponentLoader}
                                            ComponentToLoad={SaveLoaded}
                                        />
                                    }
                                />
                                <Route
                                    path="check-details"
                                    element={
                                        <FormTemplate
                                            formId={
                                                "playlist-check-details-form"
                                            }
                                            formTitle={"Check Details Form"}
                                            formDescription={
                                                "*Check more in depth details of a playlist like the duration of it or the hidden videos"
                                            }
                                            dataParser={dataVideosParser}
                                            ComponentLoader={ComponentLoader}
                                            ComponentToLoad={CheckDetailsLoaded}
                                        />
                                    }
                                />
                            </Route>
                        </Routes>
                    </HashRouter>
                </main>
            </div>
            <Footer />
        </div>
    );
}

export default App;
