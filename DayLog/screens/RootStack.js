import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainTab from './MainTab';
import WriteScreen from './WriteScreen';

const { Navigator, Screen } = createNativeStackNavigator();

const RootStack = () => {
  return (
    <Navigator>
      <Screen
        name="MainTab"
        component={MainTab}
        options={{ headerShown: false }}
      />
      <Screen
        name="WriteScreen"
        component={WriteScreen}
        options={{ headerShown: false }}
      />
    </Navigator>
  );
};

export default RootStack;

const styles = StyleSheet.create({});
