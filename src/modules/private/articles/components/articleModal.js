import React from 'react'
import { withRouter } from 'react-router-dom';
import { Modal, Button, Header, Image, Input, Grid } from 'semantic-ui-react'
import { HtmlEditor } from '../../../../components/formElements'

const articleModal = (props) => {
    const closeModal = () => props.history.push('/app/articles');

    return (
        <Modal closeIcon open size="fullscreen" onClose={closeModal} >
        <Modal.Header>Create New Article</Modal.Header>
        <Modal.Content>
    
         <Header as="h4">Title</Header>
         <Input className="title" size='large' />
         <br />
         <Header as="h4">Description</Header>
         <HtmlEditor />
        </Modal.Content>
        <Modal.Actions>
          <Button color='red'>
            cancel
          </Button>
          <Button
            positive
            icon='checkmark'
            labelPosition='right'
            content="Save"
          />
          <Button
            color="blue"
            icon='checkmark'
            labelPosition='right'
            content="Publish"
          />
        </Modal.Actions>
      </Modal>
    )
}

export default withRouter(articleModal)