import { FORM_CHANGE, SAMPLE } from '../constants/basicActionTypes';

export const formChange = () => {
    return { type: FORM_CHANGE };
  }
export const sample = () =>  ({ type: SAMPLE });
