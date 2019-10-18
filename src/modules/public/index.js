import React from 'react';
import { Container, Image } from 'semantic-ui-react';
import bgImage from '../../components/Assets/bg-image.jpg';
import { Route, withRouter, Switch } from 'react-router-dom';
import Auth from '../auth';
import auth from '../../api/auth';
import { withStore } from '../../components/HOCs';

@withRouter
class Public extends React.Component {
  componentDidMount() {
    if (auth.CheckIfUserLoggedIn()) {
      this.props.authStore.set('isUserLoggedIn', true);
    }
  }
  render() {
    return (
        <div className="public-pages">
          <Container text style={{ marginTop: '100px' }}>
          <Image size='large' centered src={bgImage} />
          </Container>
          <Switch>
           <Route path="/auth/:action" component={Auth} />
          </Switch>
        </div>
      );
  }
}

export default withStore(Public, 'authStore');