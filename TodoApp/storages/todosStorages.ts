import AsyncStorageLib from '@react-native-async-storage/async-storage';
import {Todo} from '../types/Todo';

const key = 'todos';

const todosStorage = {
  async get() {
    try {
      const rawTodos = await AsyncStorageLib.getItem(key);
      if (!rawTodos) {
        throw new Error('No saved Todos');
      }

      const savedTodos = JSON.parse(rawTodos);
      return savedTodos;
    } catch (e) {
      throw new Error('Failed to load todos');
    }
  },

  async set(data: Array<Todo>) {
    try {
      await AsyncStorageLib.setItem(key, JSON.stringify(data));
    } catch (e) {
      throw new Error('Failed to save todos');
    }
  },
};

export default todosStorage;
