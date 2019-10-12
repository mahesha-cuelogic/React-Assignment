import React from 'react';
import { Header, Divider } from 'semantic-ui-react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
    console.error('Error payload:: ', error);
    console.log('Error info:: ', info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-page">
          <Header as="h1">Something went wrong!</Header>
          <Divider horizontal />
          <p className="small">Please try again in sometime or contact us at contact@example.com</p>
        </div>
      )
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
