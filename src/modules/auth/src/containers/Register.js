import React from 'react';
import { Modal, Form, Button, Divider } from 'semantic-ui-react';
import { useSelector, useDispatch } from 'react-redux';
import { FormInput } from '../../../../components/formElements';

const Register = (props) => {
    const REGISTER_FORM = useSelector(state => state.authStore.REGISTER_FORM, () => {});
    const dispatch = useDispatch();
    return (
            <Modal open size="mini" onClose={props.closeModal} closeIcon closeOnDimmerClick>
                <Modal.Header className="center-align">Sign Up</Modal.Header>
                <Modal.Content>
                    <Form >
                        {
                        Object.keys(REGISTER_FORM.fields).map(field => (
                            <FormInput
                                name={field}
                                fieldData={REGISTER_FORM.fields[field]}
                                onChange={(e, result) => dispatch({ type: 'FORM_CHANGE', field, event: e, result, form: 'REGISTER_FORM' })}
                            />
                        ))
                        }
                        <Divider hidden />
                        <Button disabled={!REGISTER_FORM.meta.isValid} content="Register"/>
                    </Form>
                </Modal.Content>
            </Modal>
          );
}

export default Register;