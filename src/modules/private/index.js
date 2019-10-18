import React from 'react';
import { Container } from 'semantic-ui-react';
import { Route, withRouter, Switch } from 'react-router-dom';
import { withStore } from '../../components/HOCs';
import auth from '../../api/auth';
import SidebarLayout from '../../components/layouts/src/sideBar';

const getComponent = (path) => React.lazy(() => import(`./${path}`));
window.getCo=getComponent;
const routesMeta = [
  { componentPath: 'users', to: '/app/users'},
  { componentPath: 'posts', to: '/app/posts'},
  { componentPath: 'accountSettings', to: '/app/accountSetting'},
  { componentPath: 'dashboard', to: '/app'},
];
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
            <div text fluid className="fullheight">
          <SidebarLayout>
          <React.Suspense fallback={<div>Loading...</div>}>
            <Switch>
            {routesMeta.map(route => (
              <Route exact path={route.to} component={getComponent(route.componentPath)} />
            ))}
            <Route component={<span> 404 </span>} />
            </Switch>
          </React.Suspense>
          </SidebarLayout>
            </div>
        </div>
      );
  }
}

export default withStore(Private, 'authStore');