import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import Header from './Profile/Header';
import Option from './Profile/Option';
import { createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation';

const Profile = createStackNavigator({
  Home: {
    screen: Header,
  },
  Details: {
    screen: Option,
  },
}, {
    initialRouteName: 'Home',
     defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#28F1A6',
                elevation: 0,
                shadowOpacity: 0
            },
            headerTintColor: '#333333',
            headerTitleStyle: {
                fontWeight: 'bold',
                color: '#ffffff'
            }
        }
});

export default Profile;
