import { CONSTANTS } from 'app/store/constants';
import { initialState } from './initialState';

export default function persistantAppState(state = initialState, action) {
  switch (action.type) {

    default:
      return state;
  }
}