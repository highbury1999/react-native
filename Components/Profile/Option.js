import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Option extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Profile Option</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderWidth:0.5,
    borderColor:'#d6d7da',
    borderRadius:4,
    padding:20
  }
});

export default Option;
