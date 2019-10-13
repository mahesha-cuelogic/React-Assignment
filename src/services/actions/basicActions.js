import { FORM_CHANGE, SAMPLE } from '../constants/basicActionTypes';

export const formChange = ({ form, element }) => {
    return { type: FORM_CHANGE, form, element };
  }
export const sample = () =>  ({ type: SAMPLE });
