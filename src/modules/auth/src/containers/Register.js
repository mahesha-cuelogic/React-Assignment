import React from 'react';
import { Modal } from 'semantic-ui-react';


const Register = (props) => (
        <Modal open onClose={props.closeModal} closeIcon closeOnDimmerClick>
            <Modal.Header>Signup</Modal.Header>
            <Modal.Content>
                enter signup details here
            </Modal.Content>
        </Modal>
      );

export default Register;