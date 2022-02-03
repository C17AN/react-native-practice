import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Empty = () => {
  return (
    <View style={styles.block}>
      <Image
        source={require('../assets/images/young_and_happy.png')}
        resizeMode="cover"
        // source={{uri: 'https://via.placeholder.com/999'}}
        style={styles.image}
      />
      <Text style={styles.description}>야호! 할 일이 없습니다.</Text>
    </View>
  );
};

export default Empty;

const styles = StyleSheet.create({
  block: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 240,
    height: 180,
  },
  description: {
    fontSize: 24,
    color: '#9e9e9e',
  },
});
