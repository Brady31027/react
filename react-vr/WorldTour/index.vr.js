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
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
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
    position: 'absolute',
    width: 0.6,
    flexDirection: 'row',
    backgroundColor: '#BFBFBFAA',
    alignItems: 'center',
    justifyContent: 'center',
    transform: [
      { translate: [-2, -0.666, -3] }
    ],
    borderWidth: 0.01,
    borderColor: '#808080',
  },
  subMenu: {
    position: 'absolute',
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
  },
  hairline: {
    backgroundColor: 'red',
    height: 0.015,
    width: 0.5
  },
  description_root: {
    position: 'absolute',
    width: 1.6,
    backgroundColor: '#FFFFFF88',
    transform: [
      { translate: [1, 1, -3] }
    ]
  },
  description_title: {
    alignItems: 'center',
  },
  description_title_font: {
    color: '#FFF',
    fontSize: 0.15,
    marginBottom: 0.03,
  },
  description_btn_view: {
    width: 1.5,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 0.1
  },
  description_btn: {
    alignSelf:'flex-end',
    marginBottom: 0.1,
    marginLeft: 0.1,
    marginRight: 0.1,
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#C0C0C0',
    borderWidth: 0.01,
    borderColor: '#808080',
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
                          this.props.callbackHandler(place)}
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

class DescriptionHead extends React.Component {
  render() {
    return (
      <View style={styles.description_title}>
        <Text style={styles.description_title_font}>
          {this.props.place.title}
        </Text>
        <View style={styles.hairline} />
      </View>
    );
  }
}

class DescriptionContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expand: true
    }
  }

  render() {
    return (
      <View style={{position: 'absolute'}}>
        <DescriptionHead place={this.props.place}/>
        {this.state.expand? 
          <Text style={{margin: 0.03}}>{this.props.place.description}</Text>
          :console.log('dismiss')}
        
        <View style={styles.description_btn_view}>
          <VrButton style={styles.description_btn}
            onClick={()=>{
              this.setState({expand: !this.state.expand});
        }}>
          {this.state.expand? <Text>Hide Info</Text>: <Text>Show Info</Text>}
            
          </VrButton>
        </View>
      </View>
    );
  }
}

class Description extends React.Component {
  render(){
    return (
      <View style={styles.description_root}>
        <DescriptionContent place={this.props.place}/>
      </View>
    );
  }
}

export default class WorldTour extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      place: {
        title: 'Museum',
        image: 'museum.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      }
    }
  }

  setPanoImage(selectedPlace){
    this.setState({place: selectedPlace});
  }

  render() {
    return (
      <View>
        <Pano source={asset( this.state.place.image) }/>
        <Menu callbackHandler={this.setPanoImage.bind(this)}/>
        <Description place={this.state.place}/>
      </View>
    );
  }
};

AppRegistry.registerComponent('WorldTour', () => WorldTour);
