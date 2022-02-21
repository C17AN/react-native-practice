import { StyleSheet, Text, View } from 'react-native';
import React, { useContext } from 'react';
import SearchContext from '../context/SearchContext';
import LogContext from '../context/LogContext';
import FeedList from '../components/FeedList';
import EmptySearchResult from '../components/EmptySearchResult';

const SearchScreen = ({ navigation }) => {
  const { keyword } = useContext(SearchContext);
  const { logs } = useContext(LogContext);

  const filtered =
    keyword === ''
      ? []
      : logs.filter(log =>
        [log.title, log.body].some(text => text.includes(keyword)),
      );

  if (keyword === '') {
    return <EmptySearchResult type="EMPTY_KEYWORD" />;
  }

  if (!filtered.length) {
    return <EmptySearchResult type="NOT_FOUND" />;
  }

  return (
    <View style={styles.block}>
      <FeedList logs={filtered} />
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  block: { flex: 1 },
});
