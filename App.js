import React from "react"

import { NavigationContainer } from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import MapsScreens from "./screens/MapsScreens"
import AddMarker from "./screens/AddMarker"

const stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name= 'MapsScreens' component={MapsScreens} options={{headerShown: false}}/> 
        <stack.Screen name= 'AddMarker' component={AddMarker} options={{headerShown: false}}/> 
      </stack.Navigator>
    </NavigationContainer>
  );
}