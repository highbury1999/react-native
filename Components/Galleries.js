import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-navigation';

class Galleries extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentTab:1
    }
  }
  switchTab(tab){
    console.log(tab);
    this.setState({
      currentTab:tab
     });
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
            {
              this.state.currentTab == 1 ? ( <View style={[styles.tab, styles.tabBoder]}>
                <TouchableOpacity
                          style={styles.customBtnBG}
                          onPress={this.switchTab.bind(this,1)}
                        >
                          <Text style={{color:'#000'}}>ShowAll</Text>
                        </TouchableOpacity>
              </View> ) : (<View style={[styles.tab, styles.tabBoderDefault]}>
                <TouchableOpacity
                          style={styles.customBtnBG}
                          onPress={this.switchTab.bind(this,1)}
                        >
                          <Text style={{color:'#000'}}>ShowAll</Text>
                        </TouchableOpacity>
              </View>)
            }
            {
              this.state.currentTab == 2 ? ( <View style={[styles.tab, styles.tabBoder]}>
                <TouchableOpacity
                          style={styles.customBtnBG}
                          onPress={this.switchTab.bind(this,2)}
                        >
                          <Text style={{color:'#000'}}>Featured</Text>
                        </TouchableOpacity>
              </View> ) : ( <View style={[styles.tab, styles.tabBoderDefault]}>
                <TouchableOpacity
                          style={styles.customBtnBG}
                          onPress={this.switchTab.bind(this,2)}
                        >
                          <Text style={{color:'#000'}}>Featured</Text>
                        </TouchableOpacity>
              </View> )
            }
            {
              this.state.currentTab == 3 ? (<View style={[styles.tab, styles.tabBoder]}>
                <TouchableOpacity
                          style={styles.customBtnBG}
                          onPress={this.switchTab.bind(this,3)}
                        >
                          <Text style={{color:'#000'}}>Favourites</Text>
                        </TouchableOpacity>
              </View>) : <View style={[styles.tab, styles.tabBoderDefault]}>
                <TouchableOpacity
                          style={styles.customBtnBG}
                          onPress={this.switchTab.bind(this,3)}
                        >
                          <Text style={{color:'#000'}}>Favourites</Text>
                        </TouchableOpacity>
              </View>
            }
          </View>
        </View>
        {
          this.state.currentTab == 1 &&  (<View style={[styles.contentWrapper]}>
            <View styles={[styles.content]}>
              <View styles={[styles.block]}>
                <View style={[styles.img]}>
                  <Text>img111</Text>
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
  navigation: {
    flex:1,
    flexDirection:'row',
    backgroundColor: '#636363',
    alignItems:'flex-end',
    width:'100%',
    padding:10
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
    borderColor:'red'
  },
  tabBoderDefault:{
    borderColor: 'orange',
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
