import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  StyleSheet,
  VrButton,
} from 'react-vr';

const styles = StyleSheet.create({
  menu: {
    backgroundColor: '#BFBFBFAA',
    alignItems: 'center',
    justifyContent: 'center',
    transform: [
      { translate: [-2, -1, -3] }
    ]
  },
  menuText: {
    fontSize: 0.1,
    flex: 1,
    margin: 0.05,
  }

});

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expand: false,
    }
  }
  toggleMenu() {
    this.setState({ expand: !this.state.expand });
    this.props.showMenu(this.state.expand);
  }

  render() {
    return (
      <VrButton style={styles.menu} onClick={this.toggleMenu.bind(this)}>
        <Text style={styles.menuText}>
           {this.state.expand ? "Close Menu" : "Open Menu"}
        </Text>
      </VrButton>
    );
  }
}

export default class WorldTour extends React.Component {
  
  showMenu(goingToExpand){
    console.log("this is power jack: "+goingToExpand);
  }

  render() {
    return (
      <View>
        <Pano source={asset('museum.jpg')}/>
        <Menu showMenu={this.showMenu.bind(this)} />
      </View>
    );
  }
};

AppRegistry.registerComponent('WorldTour', () => WorldTour);
