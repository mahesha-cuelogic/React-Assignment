import React from 'react'
import { Menu, Segment, Sidebar, Icon } from 'semantic-ui-react'
import { Link, withRouter } from 'react-router-dom';
import { withStore } from '../../HOCs';

const navItems = [
  {title: 'Dashboard', to: '/app', icon: 'dashboard'},
  {title: 'Users', to: '/app/users', icon: 'users'},
  {title: 'Articles', to: '/app/articles', icon: 'file alternate outline'},
  {title: 'Account Settings', to: '/app/accountSetting', icon: 'user outline'},
];
const SidebarLayout = (props) => {
  const { set } = props.authStore;
  const handleLogout = () => {
    set('isUserLoggedIn', false);
    localStorage.setItem('loggedInUserId', '');
  }
  return (
    <Sidebar.Pushable>
      <Sidebar
        as={Menu}
        inverted
        vertical
        visible
        width='200px'
      >
        {navItems.map(i => (
        <Menu.Item active={i.to === props.location.pathname} as={Link} to={i.to}>
          {i.title}
          <Icon className={i.icon} />
        </Menu.Item>
        ))
        }
        <Menu.Item onClick={handleLogout}>
          Logout
          <Icon className="log out" />
        </Menu.Item>
      </Sidebar>

      <Sidebar.Pusher>
        <Segment basic className="container-width" >
          {props.children}
        </Segment>
      </Sidebar.Pusher>
    </Sidebar.Pushable>
  )
}

export default withRouter(withStore(SidebarLayout, 'authStore'))