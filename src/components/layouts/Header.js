import React from 'react'
import { Container, Image, Menu } from 'semantic-ui-react'
import logo from '../Assets/logo.png';

const FixedMenuLayout = () => (
  <div>
    <Menu fixed='top' inverted>
      <Container>
        <Menu.Item as='a' header>
          <Image size='mini' src={logo} style={{ marginRight: '1.5em' }} />
          GyanBase
        </Menu.Item>
        <Menu.Item className="right" as='a'>Login/Sign Up</Menu.Item>
      </Container>
    </Menu>
</div>
)

export default FixedMenuLayout