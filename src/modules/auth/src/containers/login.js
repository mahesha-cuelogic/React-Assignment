import React, { useState } from 'react';
import { Modal, Form, Divider, Button } from 'semantic-ui-react';
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { FormInput } from '../../../../components/formElements';
import Auth from '../../../../api/auth';

const Login = (props) => {
    const [loading, setLoader] = useState(false);
    const [error, setError] = useState('');
    const LOGIN_FORM = useSelector(state => state.authStore.LOGIN_FORM, () => {});
    const dispatch = useDispatch();
    const { email, password } = LOGIN_FORM.fields;
    const login = async () => {
        setLoader(true);
        try {
            const res = await Auth.login({ email: email.value, password: password.value });
            console.log('login', res);
            props.success();
        } catch (error) {
            setError(error.message);
        }
        setLoader(false);
    }
    return (
      <Modal open size="mini" onClose={props.closeModal} closeIcon closeOnDimmerClick>
            <Modal.Header className="center-align">Login</Modal.Header>
            <Modal.Content>
                <Form>
                    {
                    Object.keys(LOGIN_FORM.fields).map(field => (
                        <FormInput
                            name={field}
                            fieldData={LOGIN_FORM.fields[field]}
                            onChange={(e, result) => dispatch({ type: 'FORM_CHANGE', field, event: e, result, form: 'LOGIN_FORM' })}
                        />
                    ))
                    }
                    <Divider hidden />
                    <Button loading={loading} disabled={!LOGIN_FORM.meta.isValid} content="Login" onClick={login}/>
                    {error &&
                        (<p style={{ color: 'red' }}>{error}</p>)
                    }
                </Form>
                <p>Not yet a user? {'  '}<Link to="/auth/register">Create New Account Here!!</Link></p>
            </Modal.Content>
        </Modal>
    );
}
export default Login;
