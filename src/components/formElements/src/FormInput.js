import React from 'react';
import { Input, Form } from 'semantic-ui-react';

const FormInput = ({ fieldData, onChange, name }) =>  {
    const { label, type, placeholder, error } = fieldData;
    return (
        <Form.Field>
            {label &&
            <label>{label}</label>
            }
            <Input
                key={name}
                type={type || "text"}
                onChange={onChange}
                placeholder={placeholder || 'Enter here'}
            />
            {error &&
                <p style={{ fontSize: '@12px', lineHeight: '@14px', color: 'red' }} >{`${error}!!!`}</p>
            }
        </Form.Field>
    );
}
export default FormInput;
