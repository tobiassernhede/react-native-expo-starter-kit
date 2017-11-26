import { CONSTANTS } from 'app/store/constants';
import { initialState } from './initialState';

export default function appLoading(state = initialState, action) {
  switch (action.type) {

    case CONSTANTS.APPSTATE.APP_LOADED:
      return newState = Object.assign({}, state, {
        loaded: true
      });

    default:
      return state;
  }
}