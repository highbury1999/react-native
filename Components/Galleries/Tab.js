import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

class Tab extends React.Component {
 constructor(props){
   super(props);
   console.log('inside tab');
   this.state = {
     currentTab: this.props.currentTab
   }
 }
 switchTab(tab){
   console.log(tab);
   this.setState({
     currentTab:tab
   })
   this.props.switchTab(tab)


 }
  render() {
    return (
      <View style={[styles.tabWrapper]}>
        <View style={[styles.tabs]}>
          {
            this.state.currentTab == 1 ? ( <View style={[styles.tab, styles.tabBoder]}>
              <TouchableOpacity
                        style={styles.customBtnBG}
                        onPress={this.switchTab.bind(this,1)}
                      >
                        <Text style={[styles.highlighColor]}>ShowAll</Text>
                      </TouchableOpacity>
            </View> ) : (<View style={[styles.tab, styles.tabBoderDefault]}>
              <TouchableOpacity
                        style={styles.customBtnBG}
                        onPress={this.switchTab.bind(this,1)}
                      >
                        <Text style={[styles.normalColor]}>ShowAll</Text>
                      </TouchableOpacity>
            </View>)
          }
          {
            this.state.currentTab == 2 ? ( <View style={[styles.tab, styles.tabBoder]}>
              <TouchableOpacity
                        onPress={this.switchTab.bind(this,2)}
                      >
                        <Text style={[styles.highlighColor]}>Featured</Text>
                      </TouchableOpacity>
            </View> ) : ( <View style={[styles.tab, styles.tabBoderDefault]}>
              <TouchableOpacity
                        onPress={this.switchTab.bind(this,2)}
                      >
                        <Text style={[styles.normalColor]}>Featured</Text>
                      </TouchableOpacity>
            </View> )
          }
          {
            this.state.currentTab == 3 ? (<View style={[styles.tab, styles.tabBoder]}>
              <TouchableOpacity
                        style={styles.customBtnBG}
                        onPress={this.switchTab.bind(this,3)}
                      >
                        <Text style={[styles.highlighColor]}>Favourites</Text>
                      </TouchableOpacity>
            </View>) : <View style={[styles.tab, styles.tabBoderDefault]}>
              <TouchableOpacity
                        onPress={this.switchTab.bind(this,3)}
                      >
                        <Text style={[styles.normalColor]}>Favourites</Text>
                      </TouchableOpacity>
            </View>
          }
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  tabWrapper:{
    flex:1,
    alignItems: 'center',
    margin:5,
    justifyContent: 'center',
    backgroundColor: '#ccc',
    width:'100%'
  },
  tabs:{
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    height:'100%',
    justifyContent:'space-around',
    paddingLeft:10,
    paddingRight:10
  },
  tab:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    height:'100%',
    borderBottomWidth:5,
  },
  tabBoder:{
    borderColor:'#ed1515'
  },
  tabBoderDefault:{
    borderColor: '#ccc',
  },
  highlighColor:{
    color:'#ed1515'
  },
  normalColor:{
    color:'#000'
  }
});
export default Tab;
