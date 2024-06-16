import { useState } from "react";

export default function Header() {
    const [navMenu, setNavMenu] = useState(false);

    const handleNavMenu = () =>
        navMenu ? setNavMenu(false) : setNavMenu(true);

    return (
        <header className="yig-white-bg border-b-2 yig-black-25-border flex flex-col sticky top-0 shadow-lg">
            <div className="flex justify-between px-3 py-2 desktop:py-3 desktop:px-8">
                <img
                    src="./assets/yig.svg"
                    className="w-44 desktop:w-52"
                    alt=""
                />
                <button
                    className={`hamburger-btn ${
                        navMenu ? "hamburger-btn_active" : ""
                    }`}
                    onClick={handleNavMenu}
                >
                    <div className="hamburger-btn-bar-1 w-8 h-0.5 my-2 rounded-2xl transition-all duration-300 yig-black-bg"></div>
                    <div className="hamburger-btn-bar-2 w-8 h-0.5 my-2 rounded-2xl transition-all duration-300 yig-black-bg"></div>
                    <div className="hamburger-btn-bar-3 w-8 h-0.5 my-2 rounded-2xl transition-all duration-300 yig-black-bg"></div>
                </button>
            </div>
            <nav
                className={`nav-menu border-t-2 yig-black-25-border grid desktop:w-1/2 transition-all duration-300 overflow-hidden ${
                    navMenu
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                }`}
            >
                <div className="flex justify-between w-full overflow-hidden">
                    <a
                        className="p-3 hover:invert transition-all duration-300"
                        href="https://twitter.com/AdamAliWeb"
                        target="_blank"
                    >
                        <img
                            className="w-20"
                            src="./assets/twitter-icon.svg"
                            alt="Twitter"
                        />
                    </a>
                    <a
                        className="p-3 hover:invert transition-all duration-300"
                        href="https://www.linkedin.com/in/adam-ali-413660261/"
                        target="_blank"
                    >
                        <img
                            className="w-20"
                            src="./assets/linkedin-icon.svg"
                            alt="Linkedin"
                        />
                    </a>
                    <a
                        className="p-3 hover:invert transition-all duration-300"
                        href="https://adamaliweb.com"
                        target="_blank"
                    >
                        <img
                            className="w-20"
                            src="./assets/global-icon.svg"
                            alt="Personal Website"
                        />
                    </a>
                    <a
                        className="p-3 hover:invert transition-all duration-300"
                        href="https://github.com/AdamAliWeb"
                        target="_blank"
                    >
                        <img
                            className="w-20"
                            src="./assets/github-icon.svg"
                            alt="Github"
                        />
                    </a>
                    <a
                        className="p-3 hover:invert transition-all duration-300"
                        href="https://www.instagram.com/adamaliweb/"
                        target="_blank"
                    >
                        <img
                            className="w-20"
                            src="./assets/instagram-icon.svg"
                            alt="Instagram"
                        />
                    </a>
                </div>
            </nav>
        </header>
    );
}
