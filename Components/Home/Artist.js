import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Artist extends React.Component {
  render() {
    return (
      <View style={[styles.artist]}>
        <Text>This is the cart of the project</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  artist:{
    flex:5,
    justifyContent:'center',
    alignItems:'center',
    borderWidth:1,
    width:'100%'
  }
});
export default Artist;
