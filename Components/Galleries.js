import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import Navigation from './Galleries/Navigation';
import Tab from './Galleries/Tab';

class Galleries extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentTab:1
    }
    this.switchTab = this.switchTab.bind(this);
  }
  switchTab(tab){
    this.setState({
      currentTab:tab
    })

  }

componentDidUpdate(prevProps, prevState) {

}
  render() {
    return (
      <View style={[styles.container]}>
          <Navigation/>
          <Tab currentTab={this.state.currentTab} switchTab={this.switchTab}/>
          <Text>{this.state.currentTab}</Text>


        {
          this.state.currentTab == 1 &&  (<View style={[styles.contentWrapper]}>
            <View styles={[styles.content]}>
              <View styles={[styles.block]}>
                <View style={[styles.img]}>
                  <Text>{this.state.currentTab}</Text>
                </View>
                <View style={[styles.title]}>
                  <Text>title111</Text>
                </View>
                <View style={[styles.description]}>
                  <Text>description111</Text>
                </View>
                <View style={[styles.price]}>
                  <Text>price</Text>
                </View>
              </View>
            </View>
          </View>)
        }
        {
          this.state.currentTab == 2 && (<View style={[styles.contentWrapper]}>
            <View styles={[styles.content]}>
              <View styles={[styles.block]}>
                <View style={[styles.img]}>
                  <Text>img222</Text>
                </View>
                <View style={[styles.title]}>
                  <Text>title222</Text>
                </View>
                <View style={[styles.description]}>
                  <Text>description222</Text>
                </View>
                <View style={[styles.price]}>
                  <Text>price</Text>
                </View>
              </View>
            </View>
          </View>)
        }
        {
          this.state.currentTab == 3 && (<View style={[styles.contentWrapper]}>
            <View styles={[styles.content]}>
              <View styles={[styles.block]}>
                <View style={[styles.img]}>
                  <Text>img333</Text>
                </View>
                <View style={[styles.title]}>
                  <Text>title333</Text>
                </View>
                <View style={[styles.description]}>
                  <Text>description333</Text>
                </View>
                <View style={[styles.price]}>
                  <Text>price</Text>
                </View>
              </View>
            </View>
          </View>)
        }

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

  search:{
  },
  load:{

  },
  qrCode:{

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
