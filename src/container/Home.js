
import React, { Component } from "react";
import {View,Text} from 'react-native';
import AddUser from './AddUser';
import Menu from '../SimpleMenu'
import About from './About';
export default function HomeScreen({navigation}) {
    return (
      
      <View  style={{ flex: 1}}>
        <Menu navigation={navigation}/>
        <Text>Home Screen</Text>
        
      
      </View>
      
    );
  }
  


  
