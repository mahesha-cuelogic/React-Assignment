import React from 'react';
import { Container } from 'semantic-ui-react';
import { Route, withRouter, Switch } from 'react-router-dom';
import { withStore } from '../../components/HOCs';
import auth from '../../api/auth';

@withRouter
class Private extends React.Component {
  componentDidMount() {
    if (auth.CheckIfUserLoggedIn()) {
      this.props.authStore.set('isUserLoggedIn', true);
    }
    if (!this.props.authStore.isUserLoggedIn) {
      this.props.history.push('/');
    }
  }
  componentWillReceiveProps() {
    if (!this.props.authStore.isUserLoggedIn) {
      this.props.history.push('/');
    }
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