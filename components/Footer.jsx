export default function Footer() {
    return (
        <footer className="w-full bg-yellow-300 flex justify-center py-2">
            <nav className="flex justify-between md:w-1/2">
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
            </nav>
        </footer>
    );
}
