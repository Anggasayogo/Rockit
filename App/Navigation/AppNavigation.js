import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

// screen
import LaunchScreen from '../Containers/LaunchScreen'
import Home from '../Containers/HomeScreen'
import Profile from '../Containers/Profile'
import Mytabar from '../Components/Mytabar' 

const Tab = createBottomTabNavigator();

const MainApp = ()=>{
  return(
    <Tab.Navigator tabBar={ props => <Mytabar {...props}/> }>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  )
}

const Stack = createStackNavigator()

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LaunchScreen">
        <Stack.Screen name="LaunchScreen" component={LaunchScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigation
