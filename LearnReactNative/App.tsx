import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import Box from './components/Box';
import Greeting from './components/Greeting';

const App = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>Hello, World!</Text>
        <Greeting name="가람" />
        <Box size={'medium'} />
      </View>
    </SafeAreaView>
  );
};

export default App;
