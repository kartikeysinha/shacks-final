import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import TransferScreen from './screens/TransferScreen';
import PaymentScreen from './screens/PaymentScreen';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
//check for logged in state here

const MainStack = createStackNavigator();
export const MainStackScreen = ({route, navigation}) => (
  <MainStack.Navigator>
    <MainStack.Screen
      name="Login"
      component={LoginScreen}
      options={() => ({
        headerShown: false,
      })}
    />
    <MainStack.Screen
      name="Home"
      component={HomeScreen}
      options={() => ({
        headerShown: false,
      })}
    />
    <MainStack.Screen
      name="Transfers"
      component={TransferScreen}
      options={() => ({
        headerShown: false,
      })}
    />
    <MainStack.Screen name="Payments" component={PaymentScreen} />
  </MainStack.Navigator>
);

const styles = StyleSheet.create({
  icon: {
    color: 'rgba(255,255,255,1)',
    fontSize: 39,
    height: 44,
    width: 37,
  },
  icon2: {
    color: 'rgba(255,255,255,1)',
    fontSize: 40,
    height: 46,
    width: 40,
    marginLeft: 107,
  },
  icon3: {
    backgroundColor: 'transparent',
    fontSize: 24,
  },
});

const Navigation = () => (
  <NavigationContainer>
    <MainStackScreen />
  </NavigationContainer>
);

export default Navigation;
