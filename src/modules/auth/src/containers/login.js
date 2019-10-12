import React from 'react';
import { Modal } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


class Login extends React.Component {
  render() {
    return (
        <Modal open onClose={this.props.closeModal} closeIcon closeOnDimmerClick>
            <Modal.Header>Login</Modal.Header>
            <Modal.Content>
                enter login details here
            <p>Not a user?<Link to="/auth/register">REGISTER HERE!!</Link></p>
            </Modal.Content>
        </Modal>
      );
  }
}

export default Login;