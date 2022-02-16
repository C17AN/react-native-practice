import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FeedsScreen from './FeedsScreen';
import CalendarScreen from './CalendarScreen';
import SearchScreen from './SearchScreen';

const { Navigator, Screen } = createBottomTabNavigator();

const MainTab = () => {
  return (
    <Navigator>
      <Screen name="Feeds" component={FeedsScreen} />
      <Screen name="Calendar" component={CalendarScreen} />
      <Screen name="Search" component={SearchScreen} />
    </Navigator>
  );
};

export default MainTab;

const styles = StyleSheet.create({});
