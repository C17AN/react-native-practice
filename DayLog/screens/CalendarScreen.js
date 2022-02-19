import {
  Animated,
  Button,
  Dimensions,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';

const FadeAndOut = () => {
  const animation = useRef(new Animated.Value(1)).current;
  console.log(Animated);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    Animated.timing(animation, {
      toValue: hidden ? 0 : 1,
      useNativeDriver: true,
    }).start();
  }, [hidden, animation]);

  return (
    <View>
      <Animated.View
        style={[
          styles.rectangle,
          {
            opacity: animation,
          },
        ]}
      />
      <Button
        title="toggle"
        onPress={() => {
          setHidden(prev => !prev);
        }}
      />
      <Button
        title="FadeIn"
        onPress={() => {
          Animated.timing(animation, {
            toValue: 1,
            useNativeDriver: true,
          }).start();
        }}
      />
      <Button
        title="FadeOut"
        onPress={() => {
          Animated.timing(animation, {
            duration: 2000,
            toValue: 0,
            useNativeDriver: true,
          }).start();
        }}
      />
    </View>
  );
};

const SlideLeftAndRight = () => {
  const animation = useRef(new Animated.Value(0)).current;
  const windowWidth = Dimensions.get('window').width;
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    Animated.timing(animation, {
      toValue: enabled ? 1 : 0,
      useNativeDriver: true,
    }).start();
  }, [enabled, animation]);

  return (
    <View>
      <Animated.View
        style={[
          styles.rectangle,
          {
            opacity: animation.interpolate({
              inputRange: [0, 1],
              outputRange: [1, 0],
            }),
            transform: [
              {
                translateX: animation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, windowWidth - 100],
                }),
              },
            ],
          },
        ]}
      />
      <Button title="slide" onPress={() => setEnabled(prev => !prev)} />
    </View>
  );
};

const CalendarScreen = () => {
  return (
    <View style={styles.block}>
      <FadeAndOut />
      <SlideLeftAndRight />
    </View>
  );
};

export default CalendarScreen;

const styles = StyleSheet.create({
  block: {},
  rectangle: { width: 100, height: 100, backgroundColor: 'black' },
});
