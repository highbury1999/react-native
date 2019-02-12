import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './Home/Navigation';
import Artist from './Home/Artist';
import Artwork from './Home/Artwork';

class Home extends React.Component {
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
      <View style={[styles.container]}>
        <Artist/>
        <Artwork/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:'100%',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default Home;
