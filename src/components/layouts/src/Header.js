import React from 'react'
import { Link } from 'react-router-dom';
import { Container, Image, Menu, Button } from 'semantic-ui-react'
import logo from '../../Assets/logo2.png';

const Header = (props) => (
  <div>
    <Menu fixed='top' inverted>
      <Container>
        <Menu.Item as={Link} to='/' header>
          <Image size='mini' src={logo} style={{ marginRight: '1.5em' }} />
          GyanBase
        </Menu.Item>
        <Menu.Item position='right'>
        <Button inverted as={Link} to="/auth/login" className="right">Login</Button>
        <Button as={Link} to="/auth/register" inverted style={{ marginLeft: '0.5em' }}>
                    Sign Up
                  </Button>
        </Menu.Item>
      </Container>
    </Menu>
</div>
)

export default Header