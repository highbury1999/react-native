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
        <View style={[styles.item]}>
          <View style={[styles.image]}>
            <Text>this is the image</Text>
          </View>
          <View style={[styles.title]}>
            <Text>this is the title</Text>
          </View>
          <View style={[styles.description]}>
            <Text>this is the description</Text>
          </View>
          <View style={[styles.price]}>
            <Text>this is the price</Text>
          </View>
        </View>
        <View style={[styles.item]}>
          <View style={[styles.image]}>
            <Text>this is the image</Text>
          </View>
          <View style={[styles.title]}>
            <Text>this is the title</Text>
          </View>
          <View style={[styles.description]}>
            <Text>this is the description</Text>
          </View>
          <View style={[styles.price]}>
            <Text>this is the price</Text>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'row'
  },
  item:{
    flex:1,
    borderWidth:1,
    margin:5,
    padding:2
  }
})
export default Item;
