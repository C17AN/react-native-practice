import {FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import TodoItem from './TodoItem';
import {Todo} from '../types/Todo';

type TodoListProps = {
  todos: Todo[];
  onToggle: (id: number) => void;
};

const TodoList = ({todos, onToggle}: TodoListProps) => {
  return (
    <FlatList
      ItemSeparatorComponent={() => <View style={styles.seperator} />}
      style={styles.list}
      data={todos}
      renderItem={({item}) => {
        const {id, text, done} = item;
        return <TodoItem id={id} text={text} done={done} onToggle={onToggle} />;
      }}
      keyExtractor={item => item.id.toString()}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
  seperator: {
    backgroundColor: '#e0e0e0',
    height: 1,
  },
});

export default TodoList;
