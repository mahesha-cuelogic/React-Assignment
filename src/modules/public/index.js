import React from 'react';
import { Container } from 'semantic-ui-react';


class Public extends React.Component {
  render() {
    return (
        <div className="public-pages">
          <Container text style={{ marginTop: '7em' }}>
          Public layout
          </Container>
        </div>
      );
  }
}

export default Public;