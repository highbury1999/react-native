import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Galleries extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>This is the galleries section of the project</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:'100%',
    backgroundColor: '#636363',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Galleries;
