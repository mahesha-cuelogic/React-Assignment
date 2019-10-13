
class FormHandler {
    prepareForm = (fieldsArray = []) => {
        let form = {fields: {}, meta: { isValid: false, isDirty: false }};
        fieldsArray.forEach((field) => { // [key, label, rule, type, placeholder]
            const [ key, label, rule, type, placeholder ] = field;
            form.fields[key] = {
                label,
                rule: rule || 'optional',
                type: type || 'text',
                placeholder: placeholder || 'enter here...',
                error: '',
            };
        });
        return form;
    }

    formChange = ({ form, result, field }) => {
        form.fields[field].value = result.value;
        return form;
    }
}
export default new FormHandler();