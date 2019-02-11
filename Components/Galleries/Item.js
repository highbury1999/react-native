import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

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
            <Image style={[styles.img]} resizeMode="cover"
            source={require('../../assets/images/1.png')} />
          </View>
          <View style={[styles.title]}>
            <Text style={[styles.titleTxt]}>Tayvonner Cora - Ghearra</Text>
          </View>
          <View style={[styles.description]}>
            <Text style={[styles.descriptionTxt]}>JESKA VALK</Text>
          </View>
          <View style={[styles.price]}>
          <Text style={[styles.priceTxt]}>USD $120</Text>
          </View>
        </View>
        <View style={[styles.item]}>
          <View style={[styles.image]}>
            <Image style={[styles.img]} resizeMode="cover"
             source={require('../../assets/images/1.png')} />
          </View>
          <View style={[styles.title]}>
            <Text style={[styles.titleTxt]}>Carry</Text>
          </View>
          <View style={[styles.description]}>
            <Text style={[styles.descriptionTxt]}>FERN SIEBLER</Text>
          </View>
          <View style={[styles.price]}>
            <Text style={[styles.priceTxt]}>USD $120</Text>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'row',
    paddingLeft:10,
    paddingRight:10
  },
  item:{
    flex:1,
    padding:5,
    flexDirection:'column',
    borderWidth:1
  },
  image:{
    flex:4,
  },
  img:{
    width:'100%',
    height:150
  },
  title:{
    flex:1,
    justifyContent:'flex-start'
  },
  titleTxt:{
    fontWeight:'bold'
  },
  description:{
    flex:1,
    justifyContent:'flex-start',
    marginTop:5,
    marginBottom:5
  },
  descriptionTxt:{
    fontSize:10
  },
  price:{
    flex:1,
    justifyContent:'flex-start',
  },
  priceTxt:{
    fontWeight:'bold',
    color:'#ed1515'
  }
})
export default Item;
