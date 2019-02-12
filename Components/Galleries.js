import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import Tab from './Galleries/Tab';
import Content from './Galleries/Content';

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
          <Tab currentTab={this.state.currentTab} switchTab={this.switchTab}/>
          <Content currentTab = {this.state.currentTab}/>
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
