import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {LogType} from '../context/LogContext';
import FeedListItem from './FeedListItem';

type FeedListProps = {
  logs: LogType[];
};

const FeedList = ({logs}: FeedListProps) => {
  return (
    <FlatList
      data={logs}
      style={styles.block}
      renderItem={({item}) => <FeedListItem log={item} />}
      keyExtractor={log => log.id}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
    />
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
  separator: {
    backgroundColor: '#e0e0e0',
    height: 1,
    width: '100%',
  },
});

export default FeedList;
