'use strict';

var React = require('react-native');

var {
	View,
	Text,
	AppRegistry,
	StyleSheet,
} = React;

var Canvas = require('./Canvas');

function renderCanvas(canvas){
	var message = this.msg;
	var ctx = canvas.getContext('2d'),
		particles = [],
		particlesNum = 50,
		w = 200,
		h = 400,
		colors = ['#f35d4f', '#f36849', '#c0d988', '#f6ddaf1', '#f1e85b'];

		canvas.width = 200;
		canvas.height = 200;
		canvas.style.left = (window.innderWidth - 200) / 2 + 'px';

		if(window.innderHeight > 200) {
			canvas.style.top = (window.innerHeight - 200) / 2 + 'px';
		}

		function draw() {
			ctx.font = '40px Georgia';
			ctx.fillText(message, 10, 50);
		}

		draw();
};

class SimpleApp extends React.Component {
	render() {
		var context = {msg : 'ECMA!'};

		return (
			<View style={styles.container}>
				<View>
					<Canvas context={context}
						render={renderCanvas}
						style={{height:200,width:200}} />
				</View>
			</View>
		)
	}
}

var styles = React.StyleSheet.create({
	container : {
		padding : 30,
		marginTop : 65,
		borderColor : '#e7e7e7',
	}
});

React.AppRegistry.registerComponent('Canvas' , () => SimpleApp);

