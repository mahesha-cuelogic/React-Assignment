import React from 'react'
export const StoreContext = React.createContext()

export const uiStore = WrappedComponent => {
  return class extends React.Component {
    state = {
      loading: false,
      error: '',
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
      }

    }
    getState = () => this.state;
    render() {
      return (
        <StoreContext.Provider value={this.state}>
          <WrappedComponent {...this.props} />
        </StoreContext.Provider>
      )
    }
  }
}

export default uiStore