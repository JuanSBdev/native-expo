import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import StageOne from './src/components/stage_one';
import StageTwo from './src/components/stage_two';


const Stack = createStackNavigator();
export default function App() {
    return (

      <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={StageOne} />
        <Stack.Screen name="Homes" component={StageTwo} />
      </Stack.Navigator>
    </NavigationContainer>
 );  
} 



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blueviolet',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
