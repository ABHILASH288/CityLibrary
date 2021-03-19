import React, { Component } from 'react';
  import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    TouchableHighlight,
    Image,
    Alert,
    ScrollView,
    SafeAreaView,
    StatusBar
  } from 'react-native';

  import Menu from '../SimpleMenu';

export default class Movies extends Component {
  constructor(props) {
    console.log(">> Movies");
    super(props);
  }

  state = {
    movies: [],
    moviesIds: []
  };
  componentDidMount(){
    console.log(">>>>> componentDidMount...");
    fetch('https://reactnative.dev/movies.json')
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(JSON.stringify(responseJson.movies));
      this.setState({movies:responseJson.movies});
    })
    .catch((error) => {
      console.error(error);
    });
  } 
  render() {
    return (
      <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
      <Menu navigation={this.props.navigation}/>
      
      <View style={{flexDirection: 'row', height: 20}}>
      
        <View style={{flex: 1, height: 20, backgroundColor: 'powderblue'}}>
          <Text >
            Id
          </Text>
        </View>

        <View style={{flex: 2, height: 20, backgroundColor: 'pink'}}>
          <Text>
            Title
          </Text>
        </View>

        <View style={{flex: 1, height: 20, backgroundColor: 'powderblue'}}>
          <Text>
            Release Year
          </Text>
        </View>
      </View>


    {this.state.movies.map(item => (
      <View style={{flex: 1, flexDirection: 'row', height: 20}} key = {item.id}>
        <View style={{flex: 1, height: 20, backgroundColor: 'powderblue'}}>
          <Text>
            {item.id} 
          </Text>
        </View>

        <View style={{flex: 2, height: 20, backgroundColor: 'pink'}}>
          <Text>
            {item.title}
          </Text>
        </View>

        <View style={{flex: 1, height: 20, backgroundColor: 'powderblue'}}>
          <Text>
            {item.releaseYear}
          </Text>
        </View>
      </View>
      ))}
      
      </ScrollView>
      </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCDCDC',
  },
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      width:250,
      height:45,
      marginBottom:20,
      flexDirection: 'row',
      alignItems:'center'
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
  },
  inputIcon:{
    width:30,
    height:30,
    marginLeft:15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
  },
  loginButton: {
    backgroundColor: "#00b5ec",
  },
  loginText: {
    color: 'white',
  }
});
