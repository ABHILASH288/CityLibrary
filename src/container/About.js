
import {View,Text, ScrollView,StatusBar,SafeAreaView} from 'react-native';
import Menu from '../SimpleMenu';
import React,{ useReducer, useState, useEffect}  from 'react';
import {getCustomers,addCustomer} from '../Service/CustomerService';
import AsyncComp from './AsyncExample';
import AsyncStorage from '@react-native-community/async-storage';
import ShareExample from './ShareExample';
import Card from './Card';
import NativeBaseForm from './NativeBaseForm';
import Drawer from './Drawer';

// import AsyncStorage from '@react-native-async-storage/async-storage';

export default function About({navigation}) {
   const [count,setCount] = useState("0")
  var updateCount = async() => {
    let customers = await getCustomers();
    setCount (customers.length);
  }
  useEffect(() =>{
    updateCount()
  },[]);
  
  
  return (
        <>
        <StatusBar barStyle="light-content" />
        <SafeAreaView style={{backgroundColor:'white'}}>
          <ScrollView>
          <Menu navigation={navigation}/>
        <View style={{margin:'3%'}}> 
       
       
          <Text>About Screen</Text>       
          <h4>System has {count} customer records. </h4>
               
          <AsyncComp/>
          <ShareExample/>
          <Card/>

          <Drawer/>
         

        </View>
        </ScrollView>
        </SafeAreaView>
        </>
    );
  }



