/**--- Nodue Modules ---**/
import React, { Component } from 'react';
import { Provider } from 'react-redux';

/**--- Store ---**/
import store from 'app/store';

/**--- Navigation ---**/
import AppNavigator from 'app/navigation';

/**--- Components ---**/
import AppLoading from 'app/components/AppLoading';

export default class App extends Component {
  render() {
    return (
      <Provider store={ store } >
        <AppLoading>
          <AppNavigator />
        </AppLoading>
      </Provider>
    );
  }
}