import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Navigation extends React.Component {
  render() {
    return (
      <View style={[styles.navigation]}>

        <View style={[styles.naviTitle]}>
          <Text style={[styles.artwork]}>ArtWorks</Text>
        </View>
        <View style={[styles.naviIcons]}>
          <View style={[styles.search]}>
            <Text>search</Text>
          </View>
          <View style={[styles.load]}>
            <Text>load</Text>
          </View>
          <View style={[styles.qrCode]}>
            <Text>qrCode</Text>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  navigation: {
    flex:1,
    flexDirection:'row',
    alignItems:'flex-end',
    width:'100%',
    padding:10
  },
  naviTitle:{
    flex:1,
    justifyContent:'flex-start',
    alignItems:'flex-start'
  },
  naviIcons:{
    flex:1,
    justifyContent:'space-around',
    alignItems:'flex-end',
    flexDirection:'row'
  },
  artwork:{
    fontSize:20,
    fontWeight:'bold'
  }
});

export default Navigation;
