import { HashRouter, Route, Routes } from "react-router-dom";

import Home from "../components/Home";
import PlaylistMenu from "../components/PlaylistMenu";
import Header from "../components/Header";
import FormTemplate from "../components/FormTemplate";
import SaveLoaded from "../components/SaveLoaded";
import CheckDetailsLoaded from "../components/CheckDetailsLoaded";
import ComponentLoader from "../components/ComponentLoader";

import ErrorPage from "../components/ErrorPage";

import { dataDetailsCheckerParser } from "../helpers/dataDetailsCheckerParser";
import { dataLogSavingParser } from "../helpers/dataLogSavingParser";
import DefaultForm from "../components/DefaultForm";

function App() {
    return (
        <div className="min-h-screen flex flex-col justify-between yig-black">
            <div className="mb-5">
                <Header />
                <main className="main-content p-3 pb-20">
                    <HashRouter>
                        <Routes>
                            <Route index element={<Home />} />
                            <Route path="/playlist" element={<PlaylistMenu />}>
                                <Route
                                    index
                                    path=""
                                    element={<DefaultForm />}
                                />
                                <Route
                                    path="log-saving"
                                    element={
                                        <FormTemplate
                                            formId={"playlist-log-saving-form"}
                                            formTitle={"Log Saving"}
                                            formDescription={
                                                <p className="text-center md:text-lg my-3">
                                                    Enter the{" "}
                                                    <strong>URL</strong> and
                                                    save playlist information to
                                                    track deleted videos or for
                                                    future comparison. Before
                                                    saving any log, ensure to
                                                    check for inaccessible
                                                    videos in the playlist
                                                    details.
                                                </p>
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
                                            formTitle={"Details Checker"}
                                            formDescription={
                                                <p className="text-center md:text-lg my-3">
                                                    Explore more in-depth
                                                    details of content, like its
                                                    duration or hidden videos.
                                                </p>
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
                                    <ErrorPage
                                        errorTitle={
                                            <span>
                                                <strong>Error 404</strong>: Page
                                                not Found
                                            </span>
                                        }
                                    />
                                }
                            />
                        </Routes>
                    </HashRouter>
                </main>
            </div>
        </div>
    );
}

export default App;
