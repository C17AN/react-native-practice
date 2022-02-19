import { TextInput, StyleSheet, Text, View } from 'react-native';
import React, { useContext, useState } from 'react';
import FloatingWriteButton from '../components/FloatingWriteButton';
import LogContext from '../context/LogContext';
import FeedList from '../components/FeedList';

const FeedsScreen = () => {
  const { logs } = useContext(LogContext);
  const [hidden, setHidden] = useState(false);

  const onScrolledToBottom = isBottom => {
    if (hidden !== isBottom) {
      setHidden(isBottom);
    }
  };

  return (
    <View style={styles.block}>
      <FeedList logs={logs} onScrolledToBottom={onScrolledToBottom} />
      <FloatingWriteButton hidden={hidden} />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
});

export default FeedsScreen;
