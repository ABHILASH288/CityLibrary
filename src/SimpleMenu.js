import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
export default class SimpleMenu extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {

    return (
      <View style={{flex: 1, flexDirection: 'row'}}>
      <Button
        onPress={() => this.props.navigation.navigate('Home')}
        title="Home"
      />
      <Button
        onPress={() => this.props.navigation.navigate('Checked')}
        title="Checked / Unchecked"
      />
      <Button
        onPress={() => this.props.navigation.navigate('ListBooks')}
        title="ListBooks"
      />
   
      <Button
        onPress={() => this.props.navigation.navigate('Users')}
        title="Add Books"
      />
     
      
     
     <Button
        onPress={() => {
          AsyncStorage.removeItem("email").then(()=>{
            this.props.navigation.navigate('Login');
          })
        }}
        title="Logout"
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


