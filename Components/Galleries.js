import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-navigation';

class Galleries extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <View style={[styles.container]}>
        <View style={[styles.navigation]}>
          <View style={[styles.naviTitle]}>
            <Text>ArtWorks</Text>
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
        <View style={[styles.tabWrapper]}>
          <View style={[styles.tabs]}>
            <View style={[styles.tab]}>
              <Text>Show All</Text>
            </View>
            <View style={[styles.tab]}>
              <Text>Featured</Text>
            </View>
            <View style={[styles.tab]}>
              <Text>Favourites</Text>
            </View>
          </View>
        </View>
        <View style={[styles.contentWrapper]}>
          <View styles={[styles.content]}>
            <View styles={[styles.block]}>
              <View style={[styles.img]}>
                <Text>img</Text>
              </View>
              <View style={[styles.title]}>
                <Text>title</Text>
              </View>
              <View style={[styles.description]}>
                <Text>description</Text>
              </View>
              <View style={[styles.price]}>
                <Text>price</Text>
              </View>
            </View>
          </View>
        </View>
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
    padding:10
  },
  navigation: {
    flex:1,
    flexDirection:'row',
    backgroundColor: '#636363',
    alignItems:'flex-end',
    width:'100%'
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
  search:{
  },
  load:{

  },
  qrCode:{

  },
  tabWrapper:{
    flex:1,
    alignItems: 'center',
    margin:5,
    justifyContent: 'center',
    backgroundColor: 'orange',
    width:'100%'
  },
  tabs:{
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    height:'100%',
    justifyContent:'space-around'
  },
  tab:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    borderColor:'red',
    borderBottomWidth:0.5
  },
  contentWrapper:{
    flex:10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
    width:'100%'
  }
});

export default Galleries;
