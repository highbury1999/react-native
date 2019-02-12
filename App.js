import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, PixelRatio} from 'react-native';
import GalleriesStack from './Components/GalleriesStack';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import  Profile  from './Components/Profile';
import  Cart  from './Components/Cart';
import  ArtStack  from './Components/ArtStack';
import Home from './Components/Home';


class HomeScreen extends React.Component {
  render() {
    return (
      <Text>niu ma</Text>
    );
  }
}



const TabNavigator = createBottomTabNavigator(
  {
    Home: { screen: ArtStack },
    Artist: { screen: Cart },
    Galleries:{screen:GalleriesStack},
    Cart: {screen:Cart},
    Profile: {screen: Profile}
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Artist') {
          return <Image source={require('./assets/Home.png')}/>;
        } else if (routeName === 'Home') {
          return <Image source={require('./assets/Art.png')} />;
        } else if (routeName === 'Galleries') {
          return <Image source={require('./assets/Gallery.png')} />;
        } else if (routeName === 'Cart') {
          return <Image source={require('./assets/Cart.png')} />;
        } else if (routeName === 'Profile') {
          return <Image source={require('./assets/Profile.png')} />;
        }
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
);

export default createAppContainer(TabNavigator);
