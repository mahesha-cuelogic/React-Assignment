import { FormHandler } from '../../utilites';
import { LOGIN, REGISTER } from '../../constants/auth'
import { FORM_CHANGE, SAMPLE } from '../../constants/basicActionTypes'; 
/*
store methods:
store.getstate();
store.dispatch({type : ''}); // takes an action object
store.suscribe(() => {}); // hits when any dispatching action mutates the state
// store
// reducer
// dispatching action
// subscription
*/
const initialState = {
    LOGIN_FORM: FormHandler.prepareForm(LOGIN),
    REGISTER_FORM: FormHandler.prepareForm(REGISTER),
}

const authStore = (state = initialState, action) => {
    switch (action.type) {
        case FORM_CHANGE: 
        const { form, result, field } = action;
        return {
            ...state,
            [form] : FormHandler.formChange({ form: state[form], result, field })
        };
        case SAMPLE: return {
            ...state,
            sample: true,
        };
        default:
      return state;
    }
}

export default authStore;