import React from 'react'
import { Link } from 'react-router-dom';
import { Container, Image, Menu, Button } from 'semantic-ui-react'
import logo from '../../Assets/logo2.png';
import { withStore } from '../../../components/HOCs';

const Header = (props) => {
  const { isUserLoggedIn, set } = props.authStore;
  const handleLogout = () => {
    set('isUserLoggedIn', false);
    localStorage.setItem('loggedInUserId', '');
  }
  return (
    <div>
      <Menu fixed='top' inverted>
        <Container>
          <Menu.Item as={Link} to='/' header>
            <Image size='mini' src={logo} style={{ marginRight: '1.5em' }} />
            GyanBase
          </Menu.Item>
          <Menu.Item position='right'>
          {!isUserLoggedIn ?
          <>
          <Button inverted as={Link} to="/auth/login" className="right">Login</Button>
          <Button as={Link} to="/auth/register" inverted style={{ marginLeft: '0.5em' }}>
                      Sign Up
                    </Button></>
          : <Button inverted onClick={handleLogout} className="right">Logout</Button>
         }
          </Menu.Item>
        </Container>
      </Menu>
  </div>
  );
}


export default React.memo(withStore(Header, 'authStore'))