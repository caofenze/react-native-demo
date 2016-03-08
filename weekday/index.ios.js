// Import some code we need
var Moment = require('moment');
var React = require('react-native');
var AppRegistry = React.AppRegistry;
var Text = React.Text;
var View  = React.View;
var StyleSheet = React.StyleSheet;
var DayItem = require('./src/day-item');


// Create a react component

var DAYS = ['Sunday' , 'Monday', 'TuesDay', 'WensDay', 'ThirthDay', 'Friday', 'Sateday'];

var weekday = React.createClass({
  render : function(){
    return (
      <View style={styles.container}>
        <Text style={styles.textStyle}>
          Days of the week : 
        </Text>
        <Text>
          {Moment().format('dddd')}
        </Text>
        {this.days()}
      </View>
    )
  },
  days : function(){

    var daysItems = [];
    for(var i=0; i<7; i++){
      var day = Moment().add(i,'days').format('dddd');
      daysItems.push(
        <DayItem day={day} daysUntil={i} key={i}/>
      )
    }

    return daysItems;
  }
});

// Style the React component
var styles = StyleSheet.create({
  container : {
    flex : 1,
    justifyContent : 'center',
    alignItems : 'center'
  }
});


// Show the react component on the screen
AppRegistry.registerComponent('weekday', () => weekday);