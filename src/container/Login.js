import React, { Component,useEffect} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
     Button,
    TouchableHighlight,
    Image,
    Alert
} from 'react-native';
import AppState from './AppState';
import AsyncStorage from '@react-native-community/async-storage';


export default  function CheckLogin({navigation}) {
    const [user, setUser] = React.useState("");
    useEffect(()=>{
        console.log(">> useEffect");
        AsyncStorage.getItem('email').then((value) => {
            if(value == null){
                setUser("null");
            } else{
                navigation.navigate('Customers');
            }
        });
    },[]);
    if(user == "" ){
        return (<></>);
    }else{
        return(<Login navigation={navigation} />)
    }
}


 class Login extends Component {

     constructor(props) {
        super(props);
       this. state = {
            username: 'admin', 
            password: 'admin',
            signedIn: false,
           checkedSignIn: false 
           };

           this.getAllDocuments();
    }
     getAllDocuments= () =>{
         fetch('http://training.pyther.com:3000/login', {
             method: 'POST',
             headers: {
               Accept: 'application/json',
               'Content-Type': 'application/json',
             },
             body: JSON.stringify({
               username : this.state.username,
               password : this.state.password,
             })
           }) 
         .then((response) => response.json())
        //    AsyncStorage.setItem(LOGIN_TOKEN, response))

       .then((responseDocs) => {

         console.log("YOU HAVE SUCCSFULLY LOGGED IN:", responseDocs) 

 });}

 async storeToken(user) {
    try {
       await AsyncStorage.setItem("userData", JSON.stringify(user));
    } catch (error) {
      console.log("Something went wrong", error);
    }
  }
  async getToken(user) {
    try {
      let userData = await AsyncStorage.getItem("userData");
      let data = JSON.parse(userData);
      console.log(data);
    } catch (error) {
      console.log("Something went wrong", error);
    }
  }

  onSubmit = (e) =>{
    this.fetchData();
    e.preventDefault();
    //console.log(this.state);
    this.setState({
         username: "",
         password: "",
        });

    this.props.history.push('/landing');
    };

    fetchData() {
        fetch('http://training.pyther.com:3000/login', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
             body: JSON.stringify({
                username: 'myUserName',
                password: 'myPassword',
                Authorization: 'TheReturnedToken',
            })
        }) /*end fetch */
        .then(results => results.json())
        .then(data => this.setState({ data: data })

        )
    }

  

    // onLoginButton = () => {
    //     console.log(">> on login button");
    //     if (this.state.email == this.state.password) {
    //         this.props.navigation.navigate('Users', { name: this.state.email });
    //         this.setState({
    //             email: '',
    //             password: ''
    //         });

    //     } else {
    //         alert('Username/Password should be admin/admin.');
    //     }
    // }

    onForgotText = () => {
        //this.props.navigation.navigate('Forgot');
    }

    onRegister = () => {
        //this.props.navigation.navigate('Register');
    }


    onLoginButton = () => {
        console.log(">> on login button");
        fetch("http://training.pyther.com:3000/login", {
            method: 'post',
                headers: {
                'Content-Type': 'application/json;charset=utf-8'
                  },
                body:JSON.stringify({email: this.state.email, password:this.state.password})
            })
          .then(response => response.json())
          .then(response => {
            console.log(JSON.stringify(response));
            if(response.result == "success"){
                alert('Login success.');
                AsyncStorage.setItem('email', this.state.email);
                this.props.navigation.navigate('Customers', { name: this.state.email });
            } else {
                alert('Username/Password should be admin/admin.');
            }
            }).catch(function(error) {
                console.log(error);
            });
    }

    

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <Image style={styles.inputIcon}
                        source={{ uri: 'http://35.154.2.160/react-native/user.png' }} />
                    <TextInput style={styles.inputs}
                        placeholder="Email"
                        keyboardType="email-address"
                        underlineColorAndroid='transparent'
                        value={this.state.email}
                        onChangeText={(email) => this.setState({ email })} />
                </View>

                <View style={styles.inputContainer}>
                    <Image style={styles.inputIcon}
                        source={{ uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db' }} />
                    <TextInput style={styles.inputs}
                        placeholder="Password"
                        secureTextEntry={true}
                        underlineColorAndroid='transparent'
                        value={this.state.password}
                        onChangeText={(password) => this.setState({ password })} />
                </View>

                <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.onLoginButton()}>
                    <Text style={styles.loginText}>Login</Text>
                </TouchableHighlight>
                <AppState/>
            </View>
            
            
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
        borderRadius: 30,
        borderBottomWidth: 1,
        width: 250,
        height: 45,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    inputs: {
        height: 45,
        marginLeft: 16,
        borderBottomColor: '#FFFFFF',
        flex: 1,
    },
    inputIcon: {
        width: 30,
        height: 30,
        marginLeft: 15,
        justifyContent: 'center'
    },
    buttonContainer: {
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 250,
        borderRadius: 30,
    },
    loginButton: {
        backgroundColor: "#00b5ec",
    },
    loginText: {
        color: 'white',
    }
});