import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Item from './Item';

class Content extends React.Component {
  constructor(props){
    super(props);
    console.log('inside content');
    this.state = {
      currentTab: this.props.currentTab,
      data:[
        {key: 'Devin'},
        {key: 'Jackson'},
        {key: 'James'},
        {key: 'Joel'},
        {key: 'John'},
        {key: 'Jillian'},
        {key: 'Jimmy'},
        {key: 'Julie'},
      ],
      name:{
        key:'xuyang liao'
      }
    }
    console.log(this.state);


  }
  componentWillReceiveProps(e) {
        console.log('niuma');
        console.log(e.currentTab);
        this.setState({
          currentTab: e.currentTab
        });
      }
  render() {
    return (
      <View style={[styles.contentWrapper]}>
        {
          this.state.currentTab == 1 && <View style={[styles.contentWrapper]}>
            <View><Text>123</Text></View>
            <View><Text>234</Text></View>
          </View>
        }
        {
          this.state.currentTab == 2 && <View style={[styles.mainContent]}>
          <FlatList
          data={this.state.data}
          renderItem={({item}) => <Item item={item}/>}
        />
        </View>
        }
        {
          this.state.currentTab == 3 && <View styles={[styles.mainContent]}>
            <View styles={[styles.block]}>
              <View style={[styles.img]}>
                <Text>{this.state.currentTab}</Text>
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
        }
      </View>
    );
  }
}
const styles = StyleSheet.create({
  contentWrapper:{
    flex:10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
    width:'100%'
  },
  mainContent:{
    borderWidth:2,
    backgroundColor:'grey',
    flexDirection:'row',
    flex:1
  }
});

export default Content;
