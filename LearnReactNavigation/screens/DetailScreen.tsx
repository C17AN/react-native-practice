import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';

type Props = {};

const DetailScreen = ({route, navigation}) => {
  const {id} = route.params;

  return (
    <View style={styles.block}>
      <Text style={styles.text}>Detail {id}</Text>
      <View style={styles.buttons}>
        <Button
          title="다음"
          onPress={() => navigation.push('Detail', {id: id + 1})}
        />
        <Button title="뒤로가기" onPress={() => navigation.pop()} />
        <Button
          title="처음으로 돌아가기"
          onPress={() => navigation.popToTop()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 48,
  },
  buttons: {
    flexDirection: 'row',
  },
});

export default DetailScreen;
