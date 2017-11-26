/**--- Node Modules ---**/
import React, { Component } from 'react';
import { Font, AppLoading as ExpoAppLoading } from 'expo';
import { connect } from 'react-redux';

/**--- Store/actions ---**/
import { appLoaded } from 'app/store/actions';

class AppLoading extends Component {

	constructor(props) {
		super(props);
		this.appLoaded = this.props.appLoaded.bind(this);
	}

	async loadAssets() {
  	// await Font.loadAsync({
   //  		'trainery': require('../../../assets/fonts/trainery.ttf'),
   //  		'montserrat-black': require('../../../assets/fonts/Montserrat-Black.ttf'),
   //  		'montserrat-extra-bold': require('../../../assets/fonts/Montserrat-ExtraBold.ttf'),
   //  		'montserrat-bold': require('../../../assets/fonts/Montserrat-Bold.ttf'),
   //  		'montserrat-semi-bold': require('../../../assets/fonts/Montserrat-SemiBold.ttf'),
   //  		'montserrat-medium': require('../../../assets/fonts/Montserrat-Medium.ttf'),
   //  		'montserrat': require('../../../assets/fonts/Montserrat-Regular.ttf'),
   //  		'montserrat-light': require('../../../assets/fonts/Montserrat-Light.ttf'),
   //  		'montserrat-extra-light': require('../../../assets/fonts/Montserrat-ExtraLight.ttf'),
   //  		'montserrat-thin': require('../../../assets/fonts/Montserrat-Thin.ttf'),
  	// });
    return true;
	}

  	render() {
      return this.props.children;
  		if(this.props.appLoading.loaded) return this.props.children
  		// return (
  		// 	<ExpoAppLoading
    // 			startAsync={this.loadAssets}
    //  			onFinish={this.appLoaded}
    // 			onError={console.warn}
    // 		/>
  		// );
  	}
}

const mapStateToProps = state => ({
	appLoading: state.appLoading
});

const mapDispatchToProps = (dispatch) => {
	return {
		appLoaded: () => dispatch(appLoaded())
	}
};


export default connect(mapStateToProps, mapDispatchToProps)(AppLoading);