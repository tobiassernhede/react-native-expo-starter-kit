import { CONSTANTS } from 'app/store/constants';

export function appLoaded() {
  return (dispatch) => {
    dispatch({
      type: CONSTANTS.APP_LOADED.LOADED
    });
  };
};