import React,{useContext,useReducer, useState, useEffect}  from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  TextInput,
} from 'react-native';
import {getCustomers,addCustomer,updateCustomer,deleteCustomer ,editUser} from '../Service/CustomerService';

import UserList from './ListExample';
import Menu from '../SimpleMenu'


const defaultUsers =[];

const AddUser = ({navigation}) => {
  const [userId, setUserId] = React.useState('0');
  const [title, setTitle] = React.useState("");
  const [author, setAuthor] = React.useState("");
  const [publisher, setPublisher] = React.useState("");
  const [cover, setCover] = React.useState("");
  const [users, setUsers] = React.useState(defaultUsers);
  const [label, setLabel] = React.useState("Add");
  
  var relaodCustomers = async() =>{
    var cutomers = await getCustomers();
    setUsers(cutomers); 
  }

  useEffect(()=>{
    relaodCustomers();
  },[]);


 var resetForm = () =>{
    setTitle('');
    setUserId('0');
    setAuthor('');
    setCover('');
    setPublisher('');
    setLabel('Add');
  }

  var editUser = (id) =>{
    console.log("edit user:"+id);
    let tempUsers = users.filter((user)=>(user.id == id));
    if(tempUsers.length > 0){
      let currentUser = tempUsers[0];
      setTitle(currentUser.title);
      setUserId(currentUser.id);
      setAuthor(currentUser.author);
      setPublisher(currentUser.publisher);
      setCover(currentUser.cover);
      setLabel("Update");
    }
  }


  var addUpdateUser =async()  =>{
    
    dispatch({type: 'increment'})

    if(userId == "0"){ //add
      console.log(">> add");
      let user ={id:Date.now() +'e',title,author,publisher,cover};
      await addCustomer(user);
      relaodCustomers();
      //setUsers([...users, user]);
    
    }else{ //update
      console.log(">> update here");
      let user ={id:userId,title,author,publisher,cover};
      await updateCustomer(user);
      relaodCustomers();
    }
    resetForm();     
     
    }
   
  

  var deleteUser = (id) =>{
    console.log("delete user:"+id);
    let tempUsers = users.filter((user)=>(user.id != id));
    setUsers(tempUsers);
  }
// -------------START--COUNTER ----------------------


  const initialState = {count: 3};

  function reducer(state, action) {
    switch (action.type) {
       case 'increment':
          return {count: state.count + 1};
       case 'decrement':
          return {count: state.count - 1};
      default:
    throw new Error();
  }
}

  const [counter, setCounter] = useState("initial");
  const [state, dispatch] = useReducer(reducer, initialState);
// --------------END-COUNTER ----------------------
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.body}>
          <Menu navigation={navigation}/>
            <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Add Books </Text>
            <View>
            <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom:20 }}
            placeholder="Enter Title"
            onChangeText={text => setTitle(text)}
            value={title}
            />
            <TextInput placeholder="author"
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 , marginBottom:20}}
            onChangeText={text => setauthor(text)}
            placeholder="Enter Author"
            value={author}
            />
              <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 , marginBottom:20}}
            onChangeText={text => setPublisher(text)}
            placeholder="Enter Publisher"
            value={publisher}
            />
            <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 , marginBottom:20}}
            onChangeText={text => setCover(text)}
            placeholder="Enter Cover"
            value={cover}
            />
            <Button
             title={label} 
             onPress={addUpdateUser}
              ></Button>
            
            
            </View>
          
            
            <UserList users={users} 
              deleteUser={deleteUser} 
              editUser={editUser}
              navigation={navigation}>
            </UserList>
            <View/>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
      
      {/* <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button> */}
    </>
  );
};

 

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'white',
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: 'white',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: 'black',
    marginBottom:20
  },
  sectionPublisher: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default AddUser;
