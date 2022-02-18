import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  Platform,
} from 'react-native';
import React, {useContext} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import WriteHeader from '../components/WriteHeader';
import WriteEditor from '../components/WriteEditor';
import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import LogContext from '../context/LogContext';

const WriteScreen = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const navigation = useNavigation();

  const {onCreate} = useContext(LogContext);

  const onSave = () => {
    onCreate({
      title,
      body,
      date: new Date().toISOString(),
    });
    navigation.pop();
  };

  return (
    <SafeAreaView style={styles.block}>
      <KeyboardAvoidingView
        style={styles.avoidingView}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <WriteHeader onSave={onSave} />
        <WriteEditor
          title={title}
          body={body}
          onChangeTitle={setTitle}
          onChangeBody={setBody}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default WriteScreen;

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
  avoidingView: {
    flex: 1,
  },
});
