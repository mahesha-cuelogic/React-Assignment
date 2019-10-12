import React from 'react';
import { Container } from 'semantic-ui-react';
import { Route, withRouter, Switch } from 'react-router-dom';
import Auth from '../auth';

@withRouter
class Public extends React.Component {
  render() {
    console.log('in public');
    return (
        <div className="public-pages">
          <Container text style={{ marginTop: '7em' }}>
          Public layout
          </Container>
          <Switch>
           <Route path="/auth/:action" component={Auth} />
          </Switch>
        </div>
      );
  }
}

export default Public;