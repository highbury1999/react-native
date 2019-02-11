import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Item extends React.Component {
  constructor(props){
    super(props);
    console.log('niuma item');
    console.log(props);
    this.state = {
      item:props.item
    }
  }
  render() {
    return (
      <View style={[styles.container]}>
        <Text>{this.state.item.key}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row'
  }
})
export default Item;
