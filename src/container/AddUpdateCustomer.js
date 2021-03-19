import React,{useEffect} from 'react';
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
import Menu from '../SimpleMenu';
import {getCustomers, getCustomerById,addCustomer,updateCustomer,deleteCustomer} from '../Service/CustomerService';

const defaultUsers =[];

const AddUser = ({route, navigation}) => {
  //const {userId} = route.params;
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
  var loadCustomer = async (currentUserId) =>{
    let currentUser = await getCustomerById(currentUserId);
      setTitle(currentUser.title);
      setUserId(currentUser.id);
      setAuthor(currentUser.author);
      setPublisher(currentUser.publisher);
      setCover(currentUser.cover);
      setLabel("Update");
  }
  useEffect(()=>{
    if(route.params && route.params.userId){
        loadCustomer(route.params.userId);
    }
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
    console.log("edit userAdd:"+id);
  }
  var addUpdateUser = async() =>{
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
    navigation.navigate('Customers');  
  }
  var deleteUser = (id) =>{
    console.log("delete user:"+id);
    let tempUsers = users.filter((user)=>(user.id != id));
    setUsers(tempUsers);
  }
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
            <View>
            <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom:20 }}
            placeholder="Enter Title"
            onChangeText={text => setTitle(text)}
            value={title}
            />
            <TextInput placeholder="author"
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 , marginBottom:20}}
            onChangeText={text => setAuthor(text)}
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
            <Button title={label} onPress={addUpdateUser}></Button>
            </View>
            <View/>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
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
