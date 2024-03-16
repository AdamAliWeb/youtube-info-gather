export default function ErrorPage({ errorTitle }) {
    return (
        <article className="text-center">
            <h2 className="font-offside my-3 text-2xl md:text-4xl ">
                {errorTitle}
            </h2>
        </article>
    );
}
