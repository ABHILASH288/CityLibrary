import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',color:'black' }}>
      <Text>CHECKED</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',color:'black', backgroundColor: '#22eedd' }}>
      <Text>UNCHECKED</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function Student() {
  return (
      <Tab.Navigator>
        <Tab.Screen name="CHECKED" component={HomeScreen} />
        <Tab.Screen name="UNCHECKED" component={SettingsScreen} />
      </Tab.Navigator>
  );
}