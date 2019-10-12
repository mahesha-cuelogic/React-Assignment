import React from 'react'
import { Link } from 'react-router-dom';
import { Container, Image, Menu } from 'semantic-ui-react'
import logo from '../../Assets/logo2.png';

const FixedMenuLayout = () => (
  <div>
    <Menu fixed='top' inverted>
      <Container>
        <Menu.Item as={Link} to='/' header>
          <Image size='mini' src={logo} style={{ marginRight: '1.5em' }} />
          GyanBase
        </Menu.Item>
        <Menu.Item as={Link} to='/app' className="right">Login/Sign Up</Menu.Item>
      </Container>
    </Menu>
</div>
)

export default FixedMenuLayout