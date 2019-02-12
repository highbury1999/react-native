import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class Header extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft:<Text>biyang</Text>,
      headerTitle: <Text>niu ma</Text>,
      headerRight: (
        <Text>lvma</Text>
      ),
    };
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
