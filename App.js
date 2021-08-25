import React, {useState, useEffect} from 'react';
import Toast from 'react-native-toast-message';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import HomeScreen from './screens/HomeScreen';
import NotesScreen from './screens/NotesScreen';
import UploadScreen from './screens/UploadScreen';
import SavedScreen from './screens/SavedScreen';
import ProfileScreen from './screens/ProfileScreen';
import PreviewScreen from './screens/PreviewScreen';

const Stack = createStackNavigator();

const app = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Notes" component={NotesScreen} />
        <Stack.Screen name="Preview" component={PreviewScreen} />
        <Stack.Screen name="Upload" component={UploadScreen} />
        <Stack.Screen name="Saved" component={SavedScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
      <Toast ref={ref => Toast.setRef(ref)} />
    </NavigationContainer>
  );
};

export default app;
