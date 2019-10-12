import React from 'react';
import { Modal } from 'semantic-ui-react';


class Register extends React.Component {
  render() {
    return (
        <Modal open onClose={this.props.closeModal} closeIcon closeOnDimmerClick>
            <Modal.Header>Signup</Modal.Header>
            <Modal.Content>
                enter signup details here
            </Modal.Content>
        </Modal>
      );
  }
}

export default Register;