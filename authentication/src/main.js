var React = require('react-native');

var {
	StyleSheet,
	Navigator
} = React;

var Parse = require('parse/react-native');
var SignIn = require('./components/authentication/signin');
var SignUp = require('./components/authentication/signup');
var Tweets = require('./components/tweets/tweets');
var Gesture = require('./components/gesture/gesture');

var ROUTES = {
	signin : SignIn,
	signup : SignUp,
	tweets : Tweets,
	gesture : Gesture
};

module.exports = React.createClass({
	componentWillMount : function(){
		Parse.initialize("SiqwDLtU0qQ5M2jW3WDixFodLFnKnVWcQKlhhyXa", "XiS27vkRWq4GiqGxObps5rQnpGFAc1MctmIPKnAw");
	},
	renderScene : function(route, navigator){
		var Component = ROUTES[route.name];
		return <Component route={route} navigator={navigator} />;
	},
	render : function(){
		return (
			<Navigator 
				style={styles.container}
				initialRoute={{name:'signin'}}
				renderScene={this.renderScene}
				configureScene={() => {return Navigator.SceneConfigs.FloatFromRight;}}
				/>
		)
	}

});

var styles = StyleSheet.create({
	container : {
		flex : 1
	}
});