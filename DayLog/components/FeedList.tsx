import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {LogType} from '../context/LogContext';
import FeedListItem from './FeedListItem';

type FeedListProps = {
  logs: LogType[];
  onScrolledToBottom: (isBottom: boolean) => void;
};

const FeedList = ({logs, onScrolledToBottom}: FeedListProps) => {
  const onScroll = e => {
    if (!onScrolledToBottom) {
      return;
    }
    const {contentSize, layoutMeasurement, contentOffset} = e.nativeEvent;
    // contentSize: 전체 디바이스의 y, x좌표상 길이 (scrollY, scrollX)
    // layoutMeasurement: 현재 보여지는 디바이스 화면의 y, x좌표상 길이 (innerHeight, innerWidth)
    // contentOffset: 대상 요소의 (0, 0) 기준 좌표상 위치
    console.log(contentSize, layoutMeasurement, contentOffset);

    const distanceFromBottom =
      contentSize.height - layoutMeasurement.height - contentOffset.y;

    if (
      contentSize.height > layoutMeasurement.height &&
      distanceFromBottom < 72
    ) {
      onScrolledToBottom(true);
      console.log('바닥과 가까워요');
    } else {
      onScrolledToBottom(false);
      console.log('바닥과 멀어요');
    }
  };

  return (
    <FlatList
      data={logs}
      style={styles.block}
      renderItem={({item}) => <FeedListItem log={item} />}
      keyExtractor={log => log.id}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      onScroll={onScroll}
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
