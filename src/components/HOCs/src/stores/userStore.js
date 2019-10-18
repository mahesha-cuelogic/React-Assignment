import React from 'react'
import { FormHandler } from '../../../../services/utilites'
export const StoreContext = React.createContext()

const userStore = WrappedComponent => {
  return class extends React.Component {
    state = {
      userDetails: {},

      get: key => {
        return this.state[key]
      },

      set: (key, value) => {
        const state = this.state
        state[key] = value
        this.setState(state)
      },

      remove: key => {
        const state = this.state
        delete state[key]
        this.setState(state)
      },

      formChange: ({ form, result, field }) => {
        const state = this.state
        state[form] = FormHandler.formChange({ form: state[form], result, field });
        this.setState(state);
      }
    }
    render() {
      return (
        <StoreContext.Provider value={this.state}>
          <WrappedComponent {...this.props} />
        </StoreContext.Provider>
      )
    }
  }
}

export default userStore