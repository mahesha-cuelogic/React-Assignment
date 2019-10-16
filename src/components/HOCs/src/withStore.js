import React from 'react';
import { StoreContext as uiStore } from './stores/uiStore';
import { StoreContext as authStore } from './stores/authStore';

const contextMapping = {
    'uiStore': uiStore,
    'authStore': authStore,
}

const withStore = (WrappedComponent, contextName) => {
    const StoreContext = contextMapping[contextName];
    return class extends React.Component {
      getStore = (contxt) => { return { [contextName] : contxt } }
      render() {
        return (
          <StoreContext.Consumer>
            {context => <WrappedComponent {...this.getStore(context)} {...this.props} />}
          </StoreContext.Consumer>
        )
      }
    }
  }
export default withStore;
