import React from 'react';
import { StoreContext as uiStore } from './stores/uiStore';
import { StoreContext as authStore } from './stores/authStore';

const contextMapping = {
    'uiStore': uiStore,
    'authStore': authStore,
}
const getStore = (contxt, storeName) => { return { [storeName] : contxt } }

export const GetWrappedComponent = ({Wrapped, Wrapper, storeName}) => {
  // console.log('in GetWrappedComponent');
   return (
     <Wrapper.Consumer>
       {context => <Wrapped {...getStore(context, storeName)} />}
     </Wrapper.Consumer>
   );
 }
export const FinalEle = ({ contextArray, WrappedComponent }) => {
   let TempWrappedComp = WrappedComponent;
   contextArray.forEach(c => {
     console.log('before TempWrappedComp', TempWrappedComp);
   const StoreContext = contextMapping[c];
    TempWrappedComp = <GetWrappedComponent Wrapped={TempWrappedComp} Wrapper={StoreContext} storeName={c} />;
    console.log('after TempWrappedComp', TempWrappedComp);
   });
   return TempWrappedComp;
 }

const withStore = (WrappedComponent, contextArray) => {
    // const StoreContext = contextMapping[contextName];
    return class extends React.Component {
      render() {
        // console.log('WrappedComponent', WrappedComponent);
        return (
          <FinalEle contextArray={contextArray} WrappedComponent={WrappedComponent}  {...this.props} />
        )
      }
    }
  }
export default withStore;
