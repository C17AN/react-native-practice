import {
  StyleSheet,
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import React from 'react';

const App = () => {
  return (
    <View>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <View style={styles.background}>
          <Text style={styles.text}>Hello, world!</Text>
        </View>
      </KeyboardAvoidingView>
      <TextInput
        style={styles.input}
        placeholder="이곳을 누르면 키보드가 올라옵니다."
      />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: '#123456',
  },
  text: {
    color: '#fff',
    fontSize: 36,
  },
  input: {
    padding: 12,
  },
});

export default App;
