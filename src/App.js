import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { Header } from './components/layouts';
import Private from './modules/private';
import Public from './modules/public';
import { uiStore, authStore, userStore, articleStore } from '../src/components/HOCs';

@withRouter
class App extends React.Component {
  shouldComponentUpdate () {
    return false;
  }
render() {
  return (
  <div className="App">
     <Header />
     <Switch>
       <Route path="/app" component={Private} />
       <Route path="/" component={Public} />
     </Switch>
  </div>);
}
}

export default articleStore(userStore(uiStore(authStore(App))));
