export default function DefaultForm() {
    return (
        <section className="w-full">
            <div className="yig-black-10-bg w-full flex flex-col justify-center items-center py-20 desktop:py-28 rounded-lg shadow-2xl">
                <img
                    src="./assets/pointer.svg"
                    alt="pointer"
                    className="yig-float w-24 desktop:w-32"
                />
                <p className="my-8 text-xl desktop:text-2xl">
                    Choose one of the <strong>above</strong> options
                </p>
            </div>
        </section>
    );
}
