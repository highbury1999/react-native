import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Content extends React.Component {
  constructor(props){
    super(props);
    console.log('inside content');
    this.state = {
      currentTab: this.props.currentTab
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
          this.state.currentTab == 1 && <View styles={[styles.content]}>
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
        }
        {
          this.state.currentTab == 2 && <View styles={[styles.content]}>
            <View styles={[styles.block]}>
              <View style={[styles.img]}>
                <Text>{this.state.currentTab}</Text>
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
        }
        {
          this.state.currentTab == 3 && <View styles={[styles.content]}>
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
  }
});

export default Content;
