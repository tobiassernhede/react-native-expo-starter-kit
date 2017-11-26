/**--- Node Modules ---**/
import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux'

/**--- Store/actions ---**/
// import { getLocation, goBackReset } from 'app/store/actions';

/**--- Core ---**/
import { BASE_STYLES } from 'app/core/baseStyles';

/**--- Components ---**/
import Text from 'app/components/Text';
import Icon from 'app/components/Icon';

class Home extends Component {

  render() {
    return (
      <View style={[BASE_STYLES.CONTAINER, {justifyContent: 'center', alignItems: 'center'}]}>
        <Text>{this.props.navigation.state.routeName}</Text>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);