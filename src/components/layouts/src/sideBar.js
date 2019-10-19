import React from 'react'
import { Header, Menu, Segment, Sidebar, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

const SidebarLayout = (props) => {
  const navItems = [
    {title: 'Dashboard', to: '/app', icon: 'dashboard'},
    {title: 'Users', to: '/app/users', icon: 'users'},
    {title: 'Posts', to: '/app/posts', icon: 'file alternate outline'},
    {title: 'Account Settings', to: '/app/accountSetting', icon: 'user outline'},
  ];
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
        <Menu.Item as={Link} to={i.to}>
          {i.title}
          <Icon className={i.icon} />
        </Menu.Item>
        ))
        }
        <Menu.Item>
          Logout
        </Menu.Item>
      </Sidebar>

      <Sidebar.Pusher>
        <Segment basic>
          {props.children}
        </Segment>
      </Sidebar.Pusher>
    </Sidebar.Pushable>
  )
}

export default SidebarLayout