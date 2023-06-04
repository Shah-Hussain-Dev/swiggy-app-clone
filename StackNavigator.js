import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from './src/screens/HomeScreen';
import SplashScreen from './src/screens/SplashScreen';
import MenuScreen from './src/screens/MenuScreen';
import CartScreen from './src/screens/CartScreen';
import LoadingScreen from './src/screens/LoadingScreen';
import OrderScreen from './src/screens/OrderScreen';
const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        {/* <Stack.Screen name="Splash" component={SplashScreen} /> */}
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Menu" component={MenuScreen} options={{headerShown:false}} />
        <Stack.Screen name="Cart" component={CartScreen} options={{headerShown:false}} />
        <Stack.Screen name="Loading" component={LoadingScreen} options={{headerShown:false}} />
        <Stack.Screen name="OrderSuccess" component={OrderScreen} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>

  )
}

export default StackNavigator
