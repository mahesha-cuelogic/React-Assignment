import React from 'react';
import { Modal, Form, Button, Divider } from 'semantic-ui-react';
import { useSelector } from 'react-redux';
import { FormInput } from '../../../../components/formElements';

const Register = (props) => {
    const REGISTER_FORM = useSelector(state => state.authStore.REGISTER_FORM);
    return (
            <Modal open size="mini" onClose={props.closeModal} closeIcon closeOnDimmerClick>
                <Modal.Header>Signup</Modal.Header>
                <Modal.Content>
                    <Form >
                        {
                        Object.keys(REGISTER_FORM.fields).map(field => (
                            <FormInput
                                name={field}
                                fieldData={REGISTER_FORM.fields[field]}
                            />
                        ))
                        }
                        <Divider hidden />
                        <Button content="Register"/>
                    </Form>
                </Modal.Content>
            </Modal>
          );
}

export default Register;