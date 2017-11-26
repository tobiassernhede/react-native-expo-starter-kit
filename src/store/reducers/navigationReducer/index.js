import { NavigationActions } from 'react-navigation';
import { RootNavigator } from 'app/navigation';
import { CONSTANTS } from 'app/store/constants';

export default function nav(state, action) {
  switch (action.type) {

    default:
      return RootNavigator.router.getStateForAction(action, state);
  }
}