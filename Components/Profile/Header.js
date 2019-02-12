import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Header extends React.Component {
  static navigationOptions = {
    title: 'Details',
  };

  render() {
    return (
      <View>
        <Text>Profile Header</Text>
      </View>
    );
  }
}

export default Header;
