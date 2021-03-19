import React, { Component } from 'react';
import {
    ScrollView,
    Text,
    TextInput,
    View,
    Button
} from 'react-native';


    

export default class Logins extends Component {


    

    
    render() {
        return (
            <ScrollView style={{padding: 20}}>
                <Text 
                    style={{fontSize: 27}}>
                    Login
                </Text>
                <View style={{margin:7}}>
                <View style={{margin:7}}>
                <TextInput placeholder='Username' />
                    </View>
                    <View style={{margin:7}}>
                <TextInput placeholder='Password' />
                </View>

                </View>
                
                <View style={{margin:7}} />
                <Button 
                          onPress={this.props.onLoginPress}
                          title="Submit"
                      />
                  </ScrollView>
            )
    }
}
