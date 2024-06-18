import { useEffect } from "react";
import useForm from "../hooks/useForm";

export default function FormTemplate({
    formId,
    formTitle,
    formDescription,
    dataParser,
    ComponentLoader,
    ComponentToLoad,
}) {
    const {
        form,
        setForm,
        setResponse,
        errors,
        response,
        handleChange,
        handleBlur,
        handleSubmit,
    } = useForm({
        url: "",
    });

    useEffect(() => {
        setForm({ url: "" });
        setResponse(false);
    }, [formId]);

    return (
        <>
            <section
                id={formId}
                className="yig-black-05-bg w-full flex flex-col justify-center items-center p-3 desktop:p-6 py-10 desktop:py-14 rounded-lg shadow-md"
            >
                <h2 className="text-center text-5xl desktop:text-8xl">
                    {formTitle}
                </h2>
                {formDescription}

                <form
                    className="flex flex-col items-center w-full "
                    onSubmit={handleSubmit}
                >
                    <input
                        className="yig-input w-full rounded p-2 desktop:p-3 yig-black-50-border border-2 focus:outline-none transition-all duration-300"
                        type="text"
                        name="url"
                        placeholder="URL"
                        required
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={form.url}
                    />

                    <input
                        className="submit-btn yig-btn yig-first-yellow-bg yig-first-yellow-border yig-black block text-center text-xl desktop:text-2xl py-3 px-6 desktop:py-5 desktop:px-10 m-6 rounded-lg border-2 hover:bg-white shadow-2xl transition-colors duration-300 cursor-pointer"
                        onClick={() => setResponse(false)}
                        type="submit"
                        value="Submit"
                    />
                </form>
            </section>
            {errors.url ? (
                <div className="yig-fade-in w-full flex items-center px-3 py-6 desktop:px-6 my-10 yig-black-05-bg rounded-lg shadow-lg">
                    <img
                        className="pr-3 desktop:w-12"
                        src="./assets/warning.svg"
                        alt="warning"
                    />
                    <p>{errors.url}</p>
                </div>
            ) : null}
            {response ? (
                <ComponentLoader
                    url={form.url}
                    dataParser={dataParser}
                    ComponentToLoad={ComponentToLoad}
                />
            ) : (
                <div className="w-full h-40"></div>
            )}
        </>
    );
}
