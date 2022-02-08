import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';

type Props = {};

const HomeScreen = props => {
  console.log(props.navigation);
  return (
    <View>
      <Button
        title="Detail 1 열기"
        onPress={() => props.navigation.push('Detail', {id: 1})}
      />
      <Button
        title="Detail 2 열기"
        onPress={() => props.navigation.push('Detail', {id: 2})}
      />
      <Button
        title="Detail 3 열기"
        onPress={() => props.navigation.push('Detail', {id: 3})}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
