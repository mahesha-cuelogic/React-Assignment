import React from 'react';
import { Container } from 'semantic-ui-react';
import { Route, withRouter, Switch } from 'react-router-dom';
import { withStore } from '../../components/HOCs';

@withRouter
class Private extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      if (!this.props.authStore.isUserLoggedIn) {
        this.props.history.push('/');
      }
    }, 100);
  }
  render() {
    return (
        <div className="private-pages">
            <Container text style={{ marginTop: '7em' }}>
            Welcome to the world of Knowledge!!!
            </Container>
        </div>
      );
  }
}

export default withStore(Private, 'authStore');