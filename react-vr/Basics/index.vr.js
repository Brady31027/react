import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  StyleSheet,
} from 'react-vr';

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
  },
  row: {
    width: 0.5, 
    height: 0.3,
    margin: 0.1,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    width: 2,
    alignItems: 'center',
    transform: [ 
      { translate: [-1, 0, -2] }
    ]
  },
})

class Btn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fontSize: 0.1
    };
  }

  render() {
    return (
      <View style={[styles.row, {backgroundColor: this.props.color}]}>
        <Text style={[styles.text, {fontSize: this.state.fontSize}]} 
              onEnter={ ()=>{
                this.setState({fontSize: 0.2} )
              }}  
              onExit={ ()=>{
                this.setState({fontSize: 0.1} )
              }}
        > {this.props.color}</Text>
      </View>
    );
  }
}

export default class Basics extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Pano source={asset('street.jpg')} />
        <Btn color="blue" />
        <Btn color="red" />
        <Btn color="green" />
      </View>
    );
  }
};

AppRegistry.registerComponent('Basics', () => Basics);
