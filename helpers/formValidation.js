export default function formValidation(form) {
    let errors = {};

    const initialRegex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\//i;
    const listRegex = /[?&]list=([^&]+)/;

    // Form Validations
    if (!form.url) {
        errors.url = "";
    } else if (!initialRegex.test(form.url)) {
        errors.url =
            "The 'Url' is not valid. The link provided must start with 'youtube.com'.";
    } else if (!listRegex.test(form.url)) {
        errors.url =
            "The 'Url' is not valid. Ensure the link includes the 'list' variable.";
    }

    return errors;
}
