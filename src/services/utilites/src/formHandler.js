import Validator from 'validatorjs';
import { mapValues } from 'lodash';

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
        form.fields[field].error = '';
        form.meta.isDirty = true;
        const validation = new Validator(
            mapValues(form.fields, f => f.value),
            mapValues(form.fields, f => f.rule),
          );
        form.meta.isValid = validation.passes();
        if (validation.errorCount && validation.errors.errors) {
            form.fields[field].error = validation.errors.errors[field] ? validation.errors.errors[field][0] : '';
        }
        // console.log('validation', validation);
        return form;
    }
}
export default new FormHandler();