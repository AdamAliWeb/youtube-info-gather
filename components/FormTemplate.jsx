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
        <section
            id={formId}
            className="w-full p-1 max-w-screen-lg flex flex-col items-center"
        >
            <h3 className="text-center text-lg md:text-2xl font-bold">
                {formTitle}
            </h3>
            <p className="text-center md:text-lg my-3">{formDescription}</p>

            <form
                className="bg-amber-100 flex flex-col items-center p-3 border-2 border-black rounded w-full "
                onSubmit={handleSubmit}
            >
                <input
                    className="w-full rounded p-1 md:p-2 md:text-xl"
                    type="text"
                    name="url"
                    placeholder="url"
                    required
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={form.url}
                />

                <input
                    className="submit-btn block bg-amber-500 text-white text-center py-1 px-4 md:py-2 md:px-5 m-2 md:mt-4 rounded-full font-bold border-2 border-black hover:bg-white hover:text-amber-500 transition-colors duration-300 cursor-pointer"
                    onClick={() => setResponse(false)}
                    type="submit"
                    value="Submit"
                />
                {errors.url ? <p className="md:text-lg">{errors.url}</p> : null}
            </form>
            {response && (
                <ComponentLoader
                    url={form.url}
                    dataParser={dataParser}
                    ComponentToLoad={ComponentToLoad}
                />
            )}
        </section>
    );
}
