export default function ErrorPage({ errorTitle }) {
    return (
        <article className="text-center">
            <h2 className="font-offside my-12 text-3xl desktop:text-6xl ">
                {errorTitle}
            </h2>
        </article>
    );
}
