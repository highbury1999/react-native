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
  },
  navigation: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#636363',
    width:'100%'
  },
  tabWrapper:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'orange',
    width:'100%'

  },
  contentWrapper:{
    flex:9,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
    width:'100%'
  }
});

export default Galleries;
