import React from 'react';
import { Input } from 'semantic-ui-react';

const FormInput = ({ fieldData, onChange, name }) =>  {
    const { label, type, placeholder, error } = fieldData;
    return (
        <div>
            {label &&
            <p>{label}</p>
            }
            <Input
                key={name}
                type={type || "text"}
                onChange={onChange}
                placeholder={placeholder || 'Enter here'}
            />
            {error &&
                <p>{`${error}!!!`}</p>
            }
        </div>
    );
}
export default FormInput;
