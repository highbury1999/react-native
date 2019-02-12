import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import Profile from './Profile';
import Option from './Profile/Option';
import { createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation';

const ProfileStack = createStackNavigator({
  Home: {
    screen: Profile,
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

export default ProfileStack;
