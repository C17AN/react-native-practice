import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Todo} from '../types/Todo';
import Icon from 'react-native-vector-icons/MaterialIcons';

type TodoItemProps = {
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
};

const TodoItem = ({
  id,
  text,
  done,
  onToggle,
  onRemove,
}: Todo & TodoItemProps) => {
  const remove = () => {
    Alert.alert(
      `'${text}' 삭제`,
      '정말로 삭제하시겠어요?',
      [
        {text: '취소', onPress: () => {}, style: 'cancel'},
        {
          text: '삭제',
          onPress: () => {
            onRemove(id);
          },
          style: 'destructive',
        },
      ],
      {
        cancelable: true,
        onDismiss: () => {},
      },
    );
  };

  return (
    <TouchableOpacity onPress={() => onToggle(id)}>
      <View style={styles.item}>
        <View style={[styles.circle, done && styles.filled]}>
          {done && (
            <Image
              source={require('../assets/icons/check_white/check_white.png')}
            />
          )}
        </View>
        <Text style={[styles.text, done && styles.lineThrough]}>{text}</Text>
        {done ? (
          <TouchableOpacity onPress={remove}>
            <Icon name="delete" size={32} color="#cdcdcd" />
          </TouchableOpacity>
        ) : (
          <View style={styles.removePlaceholder} />
        )}
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  removePlaceholder: {
    width: 32,
    height: 32,
  },
  item: {
    flexDirection: 'row',
    padding: 16,
    borderBottomColor: '#e0e0e0',
    alignItems: 'center',
  },
  circle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderColor: '#448aff',
    borderWidth: 1,
    marginRight: 16,
  },
  filled: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#448aff',
  },
  text: {
    flex: 1,
    fontSize: 16,
    color: '#212121',
  },
  lineThrough: {
    color: '#9e9e9e',
    textDecorationLine: 'line-through',
  },
});

export default TodoItem;
