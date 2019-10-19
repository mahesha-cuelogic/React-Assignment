import React from 'react';
import { Input, Form } from 'semantic-ui-react';

const FormInput = ({ fieldData, onChange, name, ...props}) =>  {
    const { label, type, placeholder, error } = fieldData;
    return (
        <Form.Field>
            {label && !props.hideTitle &&
            <label>{label}</label>
            }
            <Input
                key={name}
                type={type || "text"}
                onChange={onChange}
                placeholder={placeholder || 'Enter here'}
                {...props}
            />
            {error &&
                <p style={{ fontSize: '@12px', lineHeight: '@14px', color: 'red' }} >{`${error}!!!`}</p>
            }
        </Form.Field>
    );
}
export default FormInput;
