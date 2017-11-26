import { CONSTANTS } from 'app/store/constants';
import { initialState } from './initialState';

export default function appState(state = initialState, action) {
  switch (action.type) {

    default:
      return state;
  }
}