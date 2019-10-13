import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import { NotFound } from '../../components/layouts';
import Login from './src/containers/login';
import Register from './src/containers/Register';

@withRouter
class Auth extends React.Component {
    handleCloseModal = () => this.props.history.push('/');
    render() {
    return (
        <Container>
            <Switch>
                <Route exact path="/auth/login" render={() => (<Login closeModal={this.handleCloseModal}  />)} />
                {/* <Route path="/auth/forgot-password" component={ForgotPassword} />
                <Route path="/auth/confirm-password" component={ConfirmPassword} /> */}
                <Route path="/auth/register" render={() => (<Register closeModal={this.handleCloseModal} />)} />
                <Route component={NotFound} />
            </Switch>
        </Container>
      );
  }
}

export default Auth;