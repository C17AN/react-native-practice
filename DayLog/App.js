import { NavigationContainer } from '@react-navigation/native';
import React, { useRef } from 'react';
import {
  Animated,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import LogContext, { LogContextProvider } from './context/LogContext';
import { SearchContextProvider } from './context/SearchContext';
import RootStack from './screens/RootStack';

const App = () => {
  return (
    <NavigationContainer>
      <SearchContextProvider>
        <LogContextProvider>
          <RootStack />
        </LogContextProvider>
      </SearchContextProvider>
    </NavigationContainer>
  );
};

export default App;
