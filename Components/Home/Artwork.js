import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Artwork extends React.Component {
  render() {
    return (
      <View style={[styles.artwork]}>
        <Text>This is the cart of the project</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  artwork:{
    flex:6,
    justifyContent:'center',
    alignItems:'center',
    borderWidth:1,
    width:'100%'
  }
});
export default Artwork;
