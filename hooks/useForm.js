import { useState } from "react";
import formValidation from "../helpers/formValidation";

export default function useForm(initialForm) {
    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState({});
    const [response, setResponse] = useState(["", false]);

    // The Functions to Handle Changes to the Inputs
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleBlur = (e) => {
        handleChange(e);
        setErrors(formValidation(form));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(formValidation(form));
        // e.target.querySelector("input[type='submit']").disabled = true;

        if (Object.keys(errors).length !== 0) {
            setResponse([
                "The entered url is incorrect. Please try again.",
                false,
            ]);
            setTimeout(() => {
                setResponse(["", false]);
            }, 5000);
            return;
        }

        setResponse(["The data is correct", true]);
    };

    return {
        form,
        errors,
        response,
        handleChange,
        handleBlur,
        handleSubmit,
    };
}
