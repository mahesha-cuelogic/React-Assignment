import React from 'react';
import { StoreContext as uiStore } from './stores/uiStore';
import { StoreContext as authStore } from './stores/authStore';

const contextMapping = {
    'uiStore': uiStore,
    'authStore': authStore,
}

const withStore = (WrappedComponent, contextArray) => {
    // const StoreContext = contextMapping[contextName];
    return class extends React.Component {
      getStore = (contxt, storeName) => { return { [storeName] : contxt } }
      render() {
        console.log('WrappedComponent',typeof WrappedComponent);
        let ReturnValue = WrappedComponent;
        contextArray.forEach(c => {
           const StoreContext = contextMapping[c]; 
           ReturnValue = (
           <StoreContext.Consumer>
            {context => <ReturnValue {...this.getStore(context, c)} {...this.props} />}
          </StoreContext.Consumer>)
        });
        // const ReturnValue = (
        //   <StoreContext.Consumer>
        //     {context => <WrappedComponent {...this.getStore(context)} {...this.props} />}
        //   </StoreContext.Consumer>
        // )
        console.log('returnValue', ReturnValue);
        return ReturnValue;
      }
    }
  }
export default withStore;
