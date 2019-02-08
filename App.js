import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, PixelRatio} from 'react-native';
import Galleries from './Components/Galleries';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import  Profile  from './Components/Profile';
import  Cart  from './Components/Cart';
import  Art  from './Components/Art';


class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
      </View>
    );
  }
}


const TabNavigator = createBottomTabNavigator(
  {
    Home: { screen: HomeScreen },
    ArtWorks: { screen: Art },
    Galleries:{screen:Galleries},
    Cart: {screen:Cart},
    Profile: {screen: Profile}
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          return <Image source={require('./assets/Home.png')}/>;
        } else if (routeName === 'ArtWorks') {
          return <Image source={require('./assets/Art.png')} />;
        } else if (routeName === 'Galleries') {
          return <Image source={require('./assets/Gallery.png')} />;
        } else if (routeName === 'Cart') {
          return <Image source={require('./assets/Cart.png')} />;
        } else if (routeName === 'Profile') {
          return <Image source={require('./assets/Profile.png')} />;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
);

export default createAppContainer(TabNavigator);
