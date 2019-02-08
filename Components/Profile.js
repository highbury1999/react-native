import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './Profile/Header';
import Option from './Profile/Option';

class Profile extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Header/>
        <Option/>
      </View>
    );
  }
}

export default Profile;
