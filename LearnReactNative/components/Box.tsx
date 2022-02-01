import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

type BoxProps = {
  size?: 'small' | 'medium' | 'large';
};

const Box = ({size}: BoxProps) => {
  return <View style={[styles.box, styles.rounded, sizes[size]]} />;
};

const styles = StyleSheet.create({
  box: {
    width: 64,
    height: 64,
    backgroundColor: 'blue',
  },
  rounded: {
    borderRadius: 16,
  },
  small: {
    width: 32,
    height: 32,
  },
  medium: {
    width: 64,
    height: 64,
  },
  large: {
    width: 128,
    height: 128,
  },
});

const sizes = {
  small: styles.small,
  large: styles.large,
};

Box.defaultProps = {
  size: 'medium',
} as BoxProps;

export default Box;
