import React, { useState } from 'react';
import { Modal, Form, Divider, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { FormInput } from '../../../../components/formElements';
import Auth from '../../../../api/auth';
import { withStore } from '../../../../components/HOCs';
import { FormHandler } from '../../../../services/utilites';

const Login = (props) => {
    const [loading, setLoader] = useState(false);
    const [error, setError] = useState('');
    const { LOGIN_FORM, formChange, set } = props.authStore;
    const payload = FormHandler.EvaluateFormData({ form: LOGIN_FORM });
    const login = async () => {
        setLoader(true);
        try {
            const res = await Auth.login(payload);
            console.log('on login', res);
            localStorage.setItem('loggedInUserId', res.user.uid);
            props.history.push('/app');
            set('isUserLoggedIn', true);
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
                            fluid
                            icon={LOGIN_FORM.fields[field].icon}
                            iconPosition={LOGIN_FORM.fields[field].iconPosition}
                            name={field}
                            key={field}
                            fieldData={LOGIN_FORM.fields[field]}
                            onChange={(e, result) => formChange({field, event: e, result, form: 'LOGIN_FORM'})}
                            // onChange={(e, result) => dispatch({ type: 'FORM_CHANGE', field, event: e, result, form: 'LOGIN_FORM' })}
                        />
                    ))
                    }
                    <Divider hidden />
                    <Button color='teal' loading={loading} disabled={!LOGIN_FORM.meta.isValid} content="Login" onClick={login}/>
                    {error &&
                        (<p style={{ color: 'red' }}>{error}</p>)
                    }
                </Form>
                <p>Not yet a user? {'  '}<Link to="/auth/register">Create New Account Here!!</Link></p>
            </Modal.Content>
        </Modal>
    );
}
export default withRouter(withStore(withStore(Login, 'authStore'), 'uiStore'));
