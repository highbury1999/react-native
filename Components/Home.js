import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './Home/Navigation';
import Artist from './Home/Artist';
import Artwork from './Home/Artwork';

class Home extends React.Component {
  render() {
    return (
      <View style={[styles.container]}>
        <Navigation/>
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
  },
  artist:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    borderWidth:1
  },
  artwork:{
    flex:10,
    justifyContent:'center',
    alignItems:'center',
    borderWidth:1
  }
});

export default Home;
