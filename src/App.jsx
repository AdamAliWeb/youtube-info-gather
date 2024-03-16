import { HashRouter, Route, Routes } from "react-router-dom";

import MainMenu from "../components/MainMenu";
import PlaylistMenu from "../components/PlaylistMenu";
import Header from "../components/Header";
import FormTemplate from "../components/FormTemplate";
import SaveLoaded from "../components/SaveLoaded";
import CheckDetailsLoaded from "../components/CheckDetailsLoaded";
import ComponentLoader from "../components/ComponentLoader";
import Footer from "../components/Footer";
import ErrorPage from "../components/ErrorPage";

import { dataDetailsCheckerParser } from "../helpers/dataDetailsCheckerParser";
import { dataLogSavingParser } from "../helpers/dataLogSavingParser";

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
                                            This is the playlist section. Here,
                                            you can save information or check
                                            the details of a playlist with these
                                            options.
                                        </p>
                                    }
                                />
                                <Route
                                    path="log-saving"
                                    element={
                                        <FormTemplate
                                            formId={"playlist-log-saving-form"}
                                            formTitle={"Log Saving Form"}
                                            formDescription={
                                                "*Enter the URL and save playlist information to track deleted videos or for future comparison. Before saving any log, ensure to check for hidden/private/deleted videos in the playlist details."
                                            }
                                            dataParser={dataLogSavingParser}
                                            ComponentLoader={ComponentLoader}
                                            ComponentToLoad={SaveLoaded}
                                        />
                                    }
                                />
                                <Route
                                    path="details-checker"
                                    element={
                                        <FormTemplate
                                            formId={
                                                "playlist-details-checker-form"
                                            }
                                            formTitle={"Details Checker Form"}
                                            formDescription={
                                                "*Explore more in-depth details of content, like its duration or hidden videos."
                                            }
                                            dataParser={
                                                dataDetailsCheckerParser
                                            }
                                            ComponentLoader={ComponentLoader}
                                            ComponentToLoad={CheckDetailsLoaded}
                                        />
                                    }
                                />
                            </Route>
                            <Route
                                path="*"
                                element={
                                    <ErrorPage errorTitle="Error 404: Page not Found" />
                                }
                            />
                        </Routes>
                    </HashRouter>
                </main>
            </div>
            <Footer />
        </div>
    );
}

export default App;
