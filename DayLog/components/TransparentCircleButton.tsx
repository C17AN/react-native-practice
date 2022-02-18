import {StyleSheet, Pressable, Text, View, Platform} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

type Props = {};

const TransparentCircleButton = ({name, color, hasMarginRight, onPress}) => {
  return (
    <View
      style={[styles.iconButtonWrapper, hasMarginRight && styles.marginRight]}>
      <Pressable
        style={({pressed}) => [
          styles.iconButton,
          Platform.OS === 'ios' &&
            pressed && {
              backgroundColor: '#efefef',
            },
        ]}
        onPress={onPress}
        android_ripple={{color: '#ededed'}}>
        <Icon name={name} size={24} color={color} />
      </Pressable>
    </View>
  );
};

export default TransparentCircleButton;

const styles = StyleSheet.create({
  iconButtonWrapper: {
    width: 32,
    height: 32,
    borderRadius: 16,
    overflow: 'hidden',
  },
  iconButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  marginRight: {
    marginRight: 8,
  },
});
