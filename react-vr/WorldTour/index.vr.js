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

const places = [
  {
    title: 'Museum',
    image: 'museum.jpg',
    description: ''
  },
  {
    title: 'Louvre',
    image: 'louvre-vr.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    title: 'San Francisco',
    image: 'san-francisco-vr.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    title: 'Winter Outdoor',
    image: 'winter-outdoor.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    title: 'Zion',
    image: 'zion-vr.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    title: 'Lombard Street',
    image: 'lombard-vr.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
]

const styles = StyleSheet.create({
  menu: {
    width: 0.6,
    flexDirection: 'row',
    backgroundColor: '#BFBFBFAA',
    alignItems: 'center',
    justifyContent: 'center',
    transform: [
      { translate: [-2, -0.666, -3] }
    ]
  },
  subMenu: {
    backgroundColor: '#BFBFBFAA',
    alignItems: 'center',
    justifyContent: 'center',
    transform: [
      { translate: [-1.2, 0, -3] }
    ]
  },
  menuText: {
    fontSize: 0.1,
    flex: 1,
    margin: 0.05,
  },
  menuItem: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 0.8,
    height: 0.2,
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
  }
  
  render() {
    return (
      <View>
        <VrButton style={styles.menu} onClick={this.toggleMenu.bind(this)}>
          <Text style={styles.menuText}>
             {this.state.expand ? "Close Menu" : "Open Menu"}
          </Text>
        </VrButton>
        { this.state.expand ? 
            <View style={styles.subMenu}>
            {
              places.map((place, index) => {
                return (
                  <VrButton style={styles.menuItem}
                        key={index}
                        onClick={ () => {
                          this.props.callbackHandler(place.image)}
                        }>
                    <Text style={styles.menuText}>{place.title} </Text>    
                  </VrButton>
                )
              })
            }
            </View>: 
            console.log('hide subMenu')
        }
      </View>
    );
  }
}

export default class WorldTour extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      place_image: 'museum.jpg'
    }
  }

  setPanoImage(url){
    console.log('callback'+ url);
    this.setState({place_image: url});
  }

  render() {
    return (
      <View>
        <Pano source={asset( this.state.place_image) }/>
        <Menu callbackHandler={this.setPanoImage.bind(this)}/>
      </View>
    );
  }
};

AppRegistry.registerComponent('WorldTour', () => WorldTour);
