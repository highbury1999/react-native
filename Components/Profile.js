import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import Header from './Profile/Header';
import Option from './Profile/Option';

class Profile extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: '12'
  })
  render() {
    return (
      <View style={styles.container}>
        <Header/>
        <Option/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  subContainer: {
    flex: 1,
    width:'100%',
    backgroundColor: '#636363',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex:1,
    justifyContent:'space-around',
    alignItems:'center'
  }
});

export default Profile;
