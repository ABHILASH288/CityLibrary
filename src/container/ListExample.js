import React from 'react';
import { SafeAreaView, Image,View, FlatList, StyleSheet, Text, StatusBar, TouchableHighlight } from 'react-native';
/*
const users =[
    {id:1,title:"Vivek",author:"vivek@abc.com",publisher:'9724232344',cover:'Gujarat, India'},
    {id:2,title:"Speeka",author:"sipeeks@abc.com",publisher:'7878787837',cover:'Gujarat, India'},
    {id:3,title:"Pari",author:"pari@abc.com",publisher:'7878787837',cover:'Ahmedabad, India'}
];*/

const Item = ({ id, title,author,publisher,cover,deleteUser,editUser,navigation }) => (
  <View style={styles.item}>
    <View style={{flex: 1, flexDirection:'row'}}>
      <View style={{flex: 5}}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.title}>{publisher}</Text>
      <Text style={styles.title}>{author}</Text>
      
      
      
      
      </View>
      <View style={{flex: 1}}>
        <TouchableHighlight onPress={()=>{
          console.log("do edit :"+ id);
            // editUser(id);
            navigation.navigate('Update Customer',{userId:id});  
            
        }}>
        <Image
          style={styles.tinyLogo1}
          source={{
            uri:cover ,
          }}
        />
        </TouchableHighlight>
      </View>

      <View style={{flex: 1}}>
        <TouchableHighlight onPress={()=>{
          deleteUser(id);          
        }}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: 'http://training.pyther.com/icons/delete.png?9',
          }}
        />
        </TouchableHighlight>
      </View>
      
    </View>
    

    <View>
      <Text style={styles.author}>{author}</Text>
    </View>
    <View style={{flex: 8}}>
        <TouchableHighlight onPress={()=>{
          EditUser(id);          
        }}>
        <Text style= {{backgroundColor:'#0000FF', paddingTop: '5px', paddingBottom:'5px', textAlign:"center", color:"#ffffff" }}> Read More</Text>
        </TouchableHighlight>
      </View>
  </View>
);

const ListApp = ({users, deleteUser, editUser,navigation}) => {
  const renderItem = ({ item }) => (
    <Item id={item.id} title={item.title} author={item.author} publisher={item.publisher} cover={item.cover} deleteUser={deleteUser} editUser={editUser} navigation={navigation}/>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={users}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
  }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 24,
  },
  author: {
    fontSize:16,
  },
  others: {
    fontSize: 10,
  },
  tinyLogo: {
    width: 30,
    height: 30,
  },
  tinyLogo1:  {
    width: 100,
    height: 130,
  },
});

export default ListApp;