import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CCHome from './ClassComponents/CCHome';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CCNotes from './ClassComponents/CCNotes';
import FCNote from './FunctionalComponents/FCNote';
import FCCategory from './FunctionalComponents/FCCategory';

const Stack = createStackNavigator();

export default function App() {
  return (

      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="CCHome">
          <Stack.Screen name="CCHome" component={CCHome} />
          <Stack.Screen name="CCNotes" component={CCNotes} />
          <Stack.Screen name="FCCategory" component={FCCategory} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
