import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

type GreetingProps = {
  name: string;
};

const Greeting = ({name}) => {
  return (
    <View>
      <Text>안녕하세요, {name} 입니다!</Text>
    </View>
  );
};

export default Greeting;

Greeting.defaultProps = {
  name: '찬민',
} as GreetingProps;
