/**--- Node Modules ---**/
import React from 'react';
import { StackNavigator, TabNavigator, TabBarBottom, addNavigationHelpers, NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';

/**--- Components ---**/
import Icon from 'app/components/Icon';

/**--- Screens ---**/
import Home from 'app/navigation/screens/Home';

// const navigationOptions = ({ label = '', icon }) => {
//   tabBarLabel: label,
//   tabBarIcon: ({ tintColor }) => <Icon name='md-home' color={tintColor} />
// };

function navigationOptions({label = '', icon}) {
  return {
    tabBarLabel: label,
    tabBarIcon: ({ tintColor }) => <Icon name={icon} size={22} color={tintColor} />
  }
}

const routeConfiguration = {
  Home: {
    screen: Home,
    path: '/home',
    navigationOptions: navigationOptions({label: 'Home', icon: 'md-home'})
  },
  Settings: {
    screen: Home,
    path: '/settings',
    navigationOptions: navigationOptions({label: 'Settings', icon: 'md-cog'})
  }
}

const tabBarConfiguration = {

};

export const RootNavigator = TabNavigator(routeConfiguration, tabBarConfiguration);

const AppNavigator = ({ dispatch, nav }) => (
    <RootNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

const mapStateToProps = state => ({
    nav: state.nav,
});


export default connect(mapStateToProps)(AppNavigator);