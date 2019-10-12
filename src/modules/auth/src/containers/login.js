import React from 'react';
import { Modal } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Login = (props) => (
  <Modal open onClose={props.closeModal} closeIcon closeOnDimmerClick>
            <Modal.Header>Login</Modal.Header>
            <Modal.Content>
                enter login details here
            <p>Not a user?<Link to="/auth/register">REGISTER HERE!!</Link></p>
            </Modal.Content>
        </Modal>
);
export default Login;
