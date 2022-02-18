import { TextInput, StyleSheet, Text, View } from 'react-native';
import React, { useContext } from 'react';
import FloatingWriteButton from '../components/FloatingWriteButton';
import LogContext from '../context/LogContext';
import FeedList from '../components/FeedList';

const FeedsScreen = () => {
  const { logs } = useContext(LogContext);
  return (
    <View style={styles.block}>
      <FeedList logs={logs} />
      <FloatingWriteButton />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
});

export default FeedsScreen;
