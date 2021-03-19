import * as React from 'react';
import { View, Text } from 'react-native';
import UsersApp from './src/container/AddUser';
import Login from './src/container/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AboutScreen from './src/container/About';
import HomeScreen from './src/container/Home';
import Movies from './src/container/Movies';

import ListCustomer from './src/container/ListCustomer';
import AddUpdateCustomer from './src/container/AddUpdateCustomer';

import Checked from './src/container/TabMenu';
import Drawer from './src/container/Drawer';
import Logins from './src/screens/Logins';
import ListBooks from './src/container/ListBook';








const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>     
      
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Checked" component={Checked} />
      
      <Stack.Screen name="Logins" component={Logins} />
      <Stack.Screen name="ListBooks" component={ListBooks} />
      <Stack.Screen name="Customers" component={ListCustomer} />
      <Stack.Screen name="Add Customer" component={AddUpdateCustomer} />
      <Stack.Screen name="Update Customer" component={AddUpdateCustomer} />
      <Stack.Screen name="Users" component={UsersApp} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="About" component={AboutScreen} />
      <Stack.Screen name="Movies" component={Movies} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
