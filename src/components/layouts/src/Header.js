import React from 'react'
import { Link, withRouter } from 'react-router-dom';
import { Container, Image, Menu, Button } from 'semantic-ui-react'
import logo from '../../Assets/logo2.png';
import { withStore } from '../../../components/HOCs';

const Header = (props) => {
  const { isUserLoggedIn, set } = props.authStore;
  const handleLogout = () => {
    set('isUserLoggedIn', false);
    localStorage.setItem('loggedInUserId', '');
  }
  const showDashBoardCta=isUserLoggedIn && !props.location.pathname.includes('/app');
  return (
    <div>
      <Menu fixed='top' inverted>
        <Container>
          <Menu.Item as={Link} to='/' header>
            <Image size='mini' src={logo} style={{ marginRight: '1.5em' }} />
            GyanBase
          </Menu.Item>
          <Menu.Item position='right'>
          {showDashBoardCta &&
            <Button as={Link} to="/app" inverted style={{ marginRight: '0.5em' }} content="DashBoard" />
          }
          {!isUserLoggedIn ?
          <>
          <Button inverted as={Link} to="/auth/login" className="right">Login</Button>
          <Button as={Link} content="Sign Up" to="/auth/register" inverted style={{ marginLeft: '0.5em' }} /></>
          : <Button inverted onClick={handleLogout} className="right">Logout</Button>
         }
          </Menu.Item>
        </Container>
      </Menu>
  </div>
  );
}


export default withRouter(React.memo(withStore(Header, 'authStore')))