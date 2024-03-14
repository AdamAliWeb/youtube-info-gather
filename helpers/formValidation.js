export default function formValidation(form) {
    let errors = {};

    const initialRegex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\//i;
    const listRegex = /[?&]list=([^&]+)/;

    // Form Validations
    if (!form.url) {
        errors.url = "";
    } else if (!initialRegex.test(form.url)) {
        errors.url =
            "The 'Url' is not valid, the link provided must start as a Youtube link";
    } else if (!listRegex.test(form.url)) {
        errors.url =
            "The 'Url' is not valid, the link provided must have the list variable";
    }

    return errors;
}
