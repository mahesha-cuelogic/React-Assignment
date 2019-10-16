import React from 'react';
import { StoreContext as createStore } from './createStore';
import { StoreContext as uiStore } from './uiStore';

const contextMapping = {
    'createStore': createStore,
    'uiStore': uiStore,
}

const withStore = (WrappedComponent, contextName) => {
    const StoreContext = contextMapping[contextName];
    return class extends React.Component {
      render() {
        return (
          <StoreContext.Consumer>
            {context => <WrappedComponent store={context} {...this.props} />}
          </StoreContext.Consumer>
        )
      }
    }
  }
export default withStore;
